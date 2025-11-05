# Multi-stage Dockerfile for tcc-prototype-web

# 1) deps - install dependencies
FROM node:20-bullseye-slim AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
# prefer npm install when there is no lockfile; keep verbose output for debugging
# use --legacy-peer-deps to reduce peer-dependency failures in CI builds
RUN if [ -f package-lock.json ]; then npm install --legacy-peer-deps --no-audit --no-fund --loglevel=info; else npm install --legacy-peer-deps --no-audit --no-fund --loglevel=info; fi

# 2) builder - build the app
FROM node:20-bullseye-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) runner - production image
FROM node:20-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
# Use the default 'node' non-root user provided by the official Node image

# Copy only what we need to run the app and install production deps in a clean layer
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Install only production dependencies to reduce image size and attack surface
RUN npm install --omit=dev --legacy-peer-deps --no-audit --no-fund --loglevel=error \
	&& npm cache clean --force

# drop privileges to the 'node' user (exists in official Node images)
RUN chown -R node:node /app || true
USER node

EXPOSE 4174
# Run the vite preview server to serve built assets
CMD ["npm","run","start"]
