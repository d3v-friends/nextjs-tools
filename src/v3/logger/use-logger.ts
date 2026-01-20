"use client";

import {Logger} from "./logger";

export default function (): Logger {
	const key = process.env["NEXT_PUBLIC_LOG_LEVEL"] || "info";
	return new Logger(Logger.getLevel(key));
}
