"use client";
import {Logger} from "./logger";

export default function (): Logger {
	return new Logger(Logger.getLevel("NEXT_PUBLIC_LOG_LEVEL"));
}
