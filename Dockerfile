# Multi-stage Dockerfile for Crabster Technology
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install dependencies
RUN npm install
RUN cd backend && npm install

# Copy source files
COPY . .

# Build frontend (dist/) and backend (backend/dist/)
RUN npm run build

# Production runtime stage
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5000

# Copy built assets and backend
COPY package*.json ./
COPY backend/package*.json ./backend/
RUN npm install --omit=dev
RUN cd backend && npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/backend/dist ./backend/dist

EXPOSE 5000

CMD ["node", "backend/dist/server.js"]

