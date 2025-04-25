#!/bin/zsh

rm -rf ./dist;

tsc -p tsconfig.export.json;
rm ./**/tsconfig.export.tsbuildinfo || true;
git add .;

