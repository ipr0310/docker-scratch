# Use NodeJS 20
FROM node:20 

# Have a directory in the container file system
WORKDIR /app

# Copy the file into the working directory
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Export node web server port
EXPOSE 3000

# We are executing the following command: "node app.mjs"
CMD ["node", "app.mjs"]