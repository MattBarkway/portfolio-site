FROM node:22-bullseye as builder

RUN corepack enable
RUN corepack prepare pnpm@10.25.0 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:18-bullseye

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@10.25.0 --activate

COPY --from=builder /app /app

ENV PORT 8080

CMD ["pnpm", "start"]
