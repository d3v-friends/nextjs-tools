#!/bin/zsh

rm -rf ./dist;

pnpm up;
tsc -p tsconfig.export.json;
tsc-alias -p tsconfig.export.json;
rm ./**/tsconfig.export.tsbuildinfo || true;
git add .;

