FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app 

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY prisma ./prisma

RUN pnpm prisma generate

FROM dependencies AS prod

COPY . . 

EXPOSE 3000

RUN pnpm build

CMD ["pnpm", "start"]
