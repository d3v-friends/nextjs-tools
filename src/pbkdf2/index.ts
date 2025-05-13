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

const fnPbkdf2 = {
	salting,
	newSalt,
};

export {fnPbkdf2};
