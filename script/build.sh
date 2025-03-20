#!/bin/zsh

rm ./**/*.js || true;
rm ./**/*.d.ts || true;


#pnpm up;
tsc -p tsconfig.export.json;
rm ./**/tsconfig.export.tsbuildinfo || true;

tsc-alias -p tsconfig.export.json;
git add .;

