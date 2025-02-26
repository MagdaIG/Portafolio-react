# --- Stage 1: Build the Next.js App ---
FROM node:20 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# --- Stage 2: Run the Next.js App ---
FROM node:20 AS runner

# Set environment variables
ENV NODE_ENV=production

# Set working directory inside the container
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

# Expose port 3000 for the app
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "run", "start"]