"use server";

import {sleep} from "@src";

export default async function (ms: number, message: string) {
	await sleep(ms);
	return message;
}
