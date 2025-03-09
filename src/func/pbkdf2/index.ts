import {randomUUID} from "node:crypto";
import {pbkdf2Sync} from "pbkdf2";

function salting({salt, password}: {salt: string; password: string}): string {
	return pbkdf2Sync(password, salt, 50, 32, "sha512").toString("base64");
}

function newSalt(): string {
	return randomUUID();
}

export default {
	salting,
	newSalt,
};
