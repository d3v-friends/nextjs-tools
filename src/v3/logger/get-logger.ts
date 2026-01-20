"use server";
import {Logger} from "./logger";

export default async function getLogger(): Promise<Logger> {
	const key = process.env["LOG_LEVEL"] || "info";
	return new Logger(Logger.getLevel(key));
}
