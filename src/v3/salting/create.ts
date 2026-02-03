"use server";
import {randomBytes} from "node:crypto";

export default async function () {
	return randomBytes(16).toString("hex");
}
