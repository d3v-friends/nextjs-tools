import {randomUUID} from "crypto";
import {pbkdf2Sync} from "pbkdf2";

export interface SaltingArgs {
	salt: string;
	password: string;
	iterations?: number;
	keylen?: number;
	digest?: string;
}

function salting({salt, password, iterations = 50, keylen = 32, digest = "sha512"}: SaltingArgs): string {
	return pbkdf2Sync(password, salt, iterations, keylen, digest).toString("base64");
}

function newSalt(): string {
	return randomUUID();
}

function run(password: string): {salt: string; saltedPassword: string} {
	const salt = newSalt();
	const saltedPassword = salting({salt, password});
	return {salt, saltedPassword};
}

const fnPbkdf2 = {
	salting,
	newSalt,
	run,
};

export {fnPbkdf2};
