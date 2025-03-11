#!/bin/zsh

rm -f ./dist;

tsc -p tsconfig.export.json;
tsc-alias -p tsconfig.export.json;
git add .;