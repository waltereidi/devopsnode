# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia apenas package.json e package-lock.json
COPY package*.json ./

# Limpa cache e instala dependências
RUN npm cache clean --force && npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]