GENERAL

- Création d'un github global pour le projet

BACKEND

- Installation des dépendances
- Installation nodemon pour le lancement du serveur ( "start": "nodemon server.js" )
- Mise à jour de MONGO_URI dans les variables d'environnement pour linker le bon cluster mongodb
- Changement de port en 5001 car conflit avec serveur interne macos
- Retrait de useNewUrlParser: true et useUnifiedTopology: true dans config/db.js car déprécié

FRONTEND

- Installation des dépendances
- Mise à jour du MONGO_URI et du port ( 5000 -> 5001 )

DEPLOIEMENT

- Mise à jour du docker-compose.yml pour le port 5001 du microservice notifications
- Mise à jour du docker-compose.yml pour la variable d'environnement MONGO_URI
- Ajout du gateway dans le docker-compose.yml
