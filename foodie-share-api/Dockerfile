FROM node:23-slim

# Crée un répertoire pour votre application
WORKDIR /app

# Copie les fichiers de dépendances et package.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste de l'application
COPY . .

# Expose le port sur lequel l'application tourne
EXPOSE 3000

# Commande de lancement
CMD ["node", "server.js"]