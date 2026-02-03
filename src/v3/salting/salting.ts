"use server";
import {pbkdf2} from "node:crypto";
import {promisify} from "node:util";

const pbkdf2Async = promisify(pbkdf2);

export interface Options {
	iterations: number;
	keylen: number;
	digest: string;
}

export default async function (
	password: string,
	salt: string,
	{iterations = 600000, keylen = 64, digest = "sha512"}: Partial<Options> = {}
) {
	const derivedKey = await pbkdf2Async(password, salt, iterations, keylen, digest);
	return derivedKey.toString("hex");
}
