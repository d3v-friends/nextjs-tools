SHELL:=/bin/bash
include .env

export:
	sh ./script/build.sh
tag:
	sh ./script/tag.sh $(shell jq ".version" package.json | tr -d '"')
prod:
	sh ./script/prod.sh