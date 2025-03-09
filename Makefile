SHELL:=/bin/zsh
include .env

tag:
	sh script/tag.sh $(shell cat ./version)