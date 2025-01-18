Rapport de Développement - Test Todo List
Introduction
Ce projet a été réalisé dans le cadre d'un test technique visant à évaluer mes compétences en développement full stack.
Le test consiste à développer une application Todo List comprenant un frontend en React, un backend en NestJS, et une base de données MySQL.
L'objectif est de démontrer mes capacités à :

Créer une base de données MySQL fonctionnelle.
Mettre en place une API REST sur le backend.
Intégrer le frontend avec le backend pour assurer une communication fluide.
Ajouter des fonctionnalités demandées comme la gestion des tâches (création, édition, suppression) et une fonctionnalité bonus.

Étapes du Développement
1. Initialisation de l'environnement
J'ai commencé par forker et cloner les dépôts fournis.
Configuration des outils nécessaires :
Node.js, Yarn pour la gestion des packages.
Préparation de l'environnement local :
Installation des dépendances via yarn install dans les projets frontend et backend.

3. Création de la Base de Données
J'ai utilisé MySQL pour la gestion des données.
Configuration dans le fichier .env :
DATABASE_URL="mysql://root:password@localhost:3306/hdmtestdev"

Création des modèles avec Prisma dans le fichier schema.prisma :
model Task {
    id        Int      @id @default(autoincrement())
    name      String
    createdAt DateTime @default(now())
    updatedAt DateTime @default(now()) @updatedAt
}
Lancement des migrations pour synchroniser le modèle avec la base :
npx prisma migrate dev

3. Backend (NestJS)
a) Fonctionnalités implémentées
Création d'une tâche :

Endpoint : POST /tasks
J'ai ajouté un DTO (SaveTaskDto) pour valider les entrées.
Utilisation de Prisma dans le TaskRepository pour insérer les données.
Mise à jour d'une tâche :

Endpoint : PUT /tasks
Implémentation d'une vérification pour éviter les mises à jour inutiles si le nom n'a pas changé.
Suppression d'une tâche :

Endpoint : DELETE /tasks/:id
Méthode simple basée sur l'identifiant de la tâche.
b) Défis rencontrés
Gestion des dépendances Prisma : La synchronisation du fichier .env et la connexion à la base de données ont nécessité quelques ajustements.
Contrôle des DTO : Il a fallu ajouter des validations précises pour garantir la robustesse des API.

b) Fonctionnalité de recherche
J'ai ajouté une fonctionnalité de recherche pour retrouver facilement des tâches par leur nom :

Nouvel Endpoint : GET /tasks/search?q=<query>.

4. Frontend (React)
a) Fonctionnalités implémentées
Affichage de la liste des tâches :

J'ai utilisé le hook useEffect pour récupérer la liste des tâches via un appel API au backend.
Création et Édition des tâches :

Fonctionnalité implémentée dans la méthode handleSave, utilisant une logique conditionnelle pour déterminer si une tâche doit être créée ou mise à jour.
Composant contrôlé avec un champ de texte (TextField).
Suppression des tâches :

Méthode handleDelete connectée au bouton supprimer pour supprimer une tâche et mettre à jour la liste en temps réel.

b) Fonctionnalité de recherche
J'ai ajouté une barre de recherche pour filtrer les tâches affichées.
Ajout d'un champ TextField dans l'interface utilisateur et d'une méthode handleSearchTasks :
c) Défis rencontrés
La gestion des états locaux des tâches (avec useState) a nécessité une adaptation, particulièrement pour l'édition et les interactions en temps réel avec l'API.


Fonctionnalités Finales
Gestion complète des tâches :
Création
Modification
Suppression
Recherche par nom (bonus)
Interface utilisateur réactive et intuitive.

Difficultés Rencontrées
Synchronisation des états frontend/backend : Assurer que le frontend affiche les données actualisées 
après chaque opération (création, modification, suppression, recherche).
Configuration Prisma : Comprendre et corriger des erreurs lors de la première migration de la base.
Gestion des formulaires contrôlés dans React : Implémenter correctement l’édition et la validation des données.

Conclusion
Ce projet m'a permis de mettre en œuvre mes compétences en développement full stack tout en relevant les défis d'intégration entre le frontend et le backend. La fonctionnalité bonus de recherche illustre ma capacité à réfléchir à des solutions supplémentaires qui améliorent l’expérience utilisateur.

Je reste ouvert à toute opportunité de retour ou d'amélioration. Merci d'avoir examiné mon travail.

