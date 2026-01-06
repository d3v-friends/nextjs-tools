#!/bin/zsh

rm -rf ./dist;

tsc -p tsconfig.export.json;
resolve-tspaths -p tsconfig.export.json --verbose;
rm ./**/tsconfig.export.tsbuildinfo || true;
git add .;

