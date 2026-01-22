"use server";
import {pbkdf2Sync} from "pbkdf2";

interface SaltingArgs {
	salt: string;
	password: string;
	iterations?: number;
	keylen?: number;
	digest?: string;
}

export default async function ({
	salt,
	password,
	iterations = 50,
	keylen = 32,
	digest = "sha512",
}: SaltingArgs): Promise<string> {
	return pbkdf2Sync(password, salt, iterations, keylen, digest).toString("base64");
}
