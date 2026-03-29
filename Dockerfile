# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]