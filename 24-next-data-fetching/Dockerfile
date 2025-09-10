# ---------------------------------------------------------
# Dockerfile (Next.js SSR/ISR, Node 20 Alpine, pnpm opsiyonel)
# ---------------------------------------------------------
# 1) Dependencies layer
FROM node:20-alpine AS deps
WORKDIR /app
# Eğer pnpm kullanıyorsan:
# RUN corepack enable && corepack prepare pnpm@9.7.0 --activate
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# Kilit dosyasına göre doğru paket yöneticisini seç
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable && corepack prepare pnpm@latest --activate && pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else npm i; fi

# 2) Builder layer
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Prisma kullanıyorsan (schema varsa) generate et
# RUN npx prisma generate
# Standalone build
ENV NEXT_TELEMETRY_DISABLED=1
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm run build; \
  elif [ -f yarn.lock ]; then yarn build; \
  else npm run build; fi

# 3) Runner layer (en küçük)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Next standalone çıktısı
COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# (Opsiyonel) yalnızca gerekli env'leri geçir
EXPOSE 3000
# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD node -e "fetch('http://127.0.0.1:3000').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# Prisma migrate gerekiyorsa entrypoint'te çalıştır:
# CMD npx prisma migrate deploy && node server.js
CMD ["node", "server.js"]