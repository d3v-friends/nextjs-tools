"use server";
import {randomUUID} from "crypto";

export default async function (): Promise<string> {
	return randomUUID();
}
