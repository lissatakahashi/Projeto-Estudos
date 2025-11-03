# Multi-stage Dockerfile for tcc-prototype-web

# 1) deps - install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent

# 2) builder - build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) runner - production image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# copy built assets and node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 4173
# Use vite preview to serve the build (requires node_modules present)
CMD ["npm","run","start"]
