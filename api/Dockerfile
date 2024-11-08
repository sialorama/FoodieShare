FROM node:18-slim
# Crée un répertoire pour votre application
WORKDIR /usr/src/app

# Copie les fichiers de dépendances et package.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste de l'application
COPY . .

# Expose le port sur lequel l'application tourne
EXPOSE ${NODE_PORT}

# Commande pour démarrer l'application
CMD ["nodemon", "server.js"]