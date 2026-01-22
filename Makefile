SHELL:=/bin/bash
include .env

server:
	PORT=${PORT} NODE_OPTIONS='--inspect --enable-source-maps=true' next dev --turbopack
export:
	sh ./script/build.sh
tag:
	sh ./script/tag.sh $(shell cat ./version)
prod:
	sh ./script/prod.sh