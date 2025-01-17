import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import { PrismaService } from '../../PrismaService'; // Assurez-vous que PrismaService est bien configuré
import { BadRequestException } from '@nestjs/common';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(dto: SaveTaskDto): Promise<Task> {
    try {
      // Valider le DTO : Nous devons nous assurer que "name" est bien passé
      if (!dto.name) {
        throw new BadRequestException('The task name is required');
      }

      // Sauvegarder la tâche en base de données avec Prisma
      const newTask = await this.prismaService.task.create({
        data: {
          name: dto.name, // Enregistrement du champ 'name' dans la base de données
          // Vous n'avez pas à définir "createdAt" ou "updatedAt" manuellement, Prisma le gère automatiquement
        },
      });

      // Retourner la tâche créée
      return newTask;
    } catch (error) {
      // Gestion des erreurs
      throw new BadRequestException(`Failed to save task: ${error.message}`);
    }
  }
}
