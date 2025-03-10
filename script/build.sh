#!/bin/zsh

rm ./**/*.js || true;
rm ./**/*.d.ts || true;

tsc -p tsconfig.export.json;
git add .;