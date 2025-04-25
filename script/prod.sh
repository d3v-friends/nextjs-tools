#!/bin/zsh

source .env
pnpm next build
cp -r .next/static .next/standalone/.next/static
PORT=$PORT NODE_ENV=$NODE_ENV NODE_OPTIONS='--trace-warnings --inspect' node .next/standalone/server.js