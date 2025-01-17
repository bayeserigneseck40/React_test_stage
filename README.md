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

4. Frontend (React)
a) Fonctionnalités implémentées
Affichage de la liste des tâches :

J'ai utilisé le hook useEffect pour récupérer la liste des tâches via un appel API au backend.
Création et Édition des tâches :

Fonctionnalité implémentée dans la méthode handleSave, utilisant une logique conditionnelle pour déterminer si une tâche doit être créée ou mise à jour.
Composant contrôlé avec un champ de texte (TextField).
Suppression des tâches :

Méthode handleDelete connectée au bouton supprimer pour supprimer une tâche et mettre à jour la liste en temps réel.
b) Défis rencontrés
La gestion des états locaux des tâches (avec useState) a nécessité une adaptation, particulièrement pour l'édition et les interactions en temps réel avec l'API.

Résultat
Fonctionnalités Finales
Gestion complète des tâches (CRUD).
Interface utilisateur conviviale pour afficher, créer, modifier et supprimer des tâches.
Fonctionnalité bonus ajoutée : champ "Description" pour les tâches.

Conclusion
Ce projet m'a permis de démontrer mes compétences techniques et organisationnelles dans un environnement full stack. 
Malgré quelques défis initiaux, notamment liés à la configuration et à la gestion
des dépendances, j'ai réussi à produire une application fonctionnelle répondant aux exigences du test.

Je suis satisfait du résultat obtenu dans le temps imparti et reste ouvert aux retours pour m'améliorer davantage.

