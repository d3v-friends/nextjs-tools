"use server";
import {Logger} from "@v2/logger/logger";

export default async function (): Promise<Logger> {
	return new Logger(Logger.getLevel("LOG_LEVEL"));
}
