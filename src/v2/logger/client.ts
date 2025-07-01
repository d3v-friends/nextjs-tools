"use client";
import {Logger} from "@v2/logger/logger";

export default function (): Logger {
	return new Logger(Logger.getLevel("NEXT_PUBLIC_LOG_LEVEL"));
}
