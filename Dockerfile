# 1: Usar a imagem oficial do Node.js como base
FROM node:18-alpine

# 2: Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# 3: Copiar os arquivos package.json e package-lock.json para o contêiner
COPY package*.json ./

# 4: Instalar as dependências da aplicação
RUN npm install

# 5: Copiar todo o código da aplicação para dentro do contêiner
COPY . .

# 6: Expor a porta onde a aplicação vai rodar (3000)
EXPOSE 3000

# 7: Definir o comando para rodar a aplicação Node.js
CMD ["node", "server.js"]
