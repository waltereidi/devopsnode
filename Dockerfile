# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia apenas arquivos de dependência
COPY package*.json ./

# Instala dependências (inclui dev para lint)
RUN npm install

# Copia o restante da aplicação
COPY . .

# 🧹 Executa lint (falha o build se houver erro)
RUN npm run lint

# Expõe a porta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]