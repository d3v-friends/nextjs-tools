"use server";
import {Logger} from "./logger";

export default async function (): Promise<Logger> {
	return new Logger(Logger.getLevel("LOG_LEVEL"));
}
