# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install project dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Map port to the Docker daemon

# Define the command to run the app
CMD [ "npm", "run", "dev","--host" ]
