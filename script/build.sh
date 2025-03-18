#!/bin/zsh

rm -rf ./dist;

pnpm up;
tsc -p tsconfig.export.json;
tsc-alias -p tsconfig.export.json;
git add .;