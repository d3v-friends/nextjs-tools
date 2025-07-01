"use client";
import {LogLevel} from "../..";

export class Logger {
	constructor(public readonly level = LogLevel.INFO) {}

	public static getLevel(key: string): LogLevel {
		const str = process.env[key] || "info";
		switch (str.toLowerCase()) {
			case "trace":
				return LogLevel.TRACE;
			case "debug":
				return LogLevel.DEBUG;
			case "info":
				return LogLevel.INFO;
			case "warn":
				return LogLevel.WARN;
			case "error":
				return LogLevel.ERROR;
			default:
				return LogLevel.INFO;
		}
	}

	public trace(...args: any[]) {
		if (LogLevel.TRACE < this.level) return;
		console.log(new Date(), "TRACE", ...args);
	}

	public debug(...args: any[]) {
		if (LogLevel.DEBUG < this.level) return;
		console.log(new Date(), "DEBUG", ...args);
	}

	public info(...args: any[]) {
		if (LogLevel.INFO < this.level) return;
		console.log(new Date(), "INFO", ...args);
	}

	public warn(...args: any[]) {
		if (LogLevel.WARN < this.level) return;
		console.log(new Date(), "WARN", ...args);
	}

	public error(...args: any[]) {
		if (LogLevel.ERROR < this.level) return;
		console.log(new Date(), "ERROR", ...args);
	}
}
