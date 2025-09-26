FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-factor 2 && \
    npm config set fetch-retry-mintimeout 30000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set fetch-timeout 300000

RUN echo "Попытка 1: Используем китайское зеркало..." && \
    npm config set registry https://registry.npmmirror.com/ && \
    npm install --verbose --no-audit --no-fund || \
    (echo "Попытка 2: Используем российское зеркало..." && \
     npm config set registry https://npm.yandex-team.ru/ && \
     sleep 10 && npm install --verbose --no-audit --no-fund) || \
    (echo "Попытка 3: Оригинальный npm registry..." && \
     npm config set registry https://registry.npmjs.org/ && \
     sleep 15 && npm install --verbose --no-audit --no-fund) || \
    (echo "Попытка 4: Cloudflare зеркало..." && \
     npm config set registry https://registry.npmjs.cf/ && \
     sleep 20 && npm install --verbose --no-audit --no-fund) || \
    (echo "Последняя попытка: cnpm registry..." && \
     npm config set registry https://r.cnpmjs.org/ && \
     sleep 30 && npm install --verbose --no-audit --no-fund)

COPY . .

RUN mkdir -p public

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
