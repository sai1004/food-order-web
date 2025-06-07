# Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies separately to leverage Docker caching
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose the default Angular port
EXPOSE 4200

# Start Angular dev server
CMD ["ng", "serve", "--host", "0.0.0.0"]
