import {LogLevel} from "./types";

export class Logger {
	constructor(public readonly level = LogLevel.INFO) {}

	public static getLevel(key: string = "info"): LogLevel {
		switch (key.toLowerCase()) {
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
		console.trace(...args);
	}

	public debug(...args: any[]) {
		if (LogLevel.DEBUG < this.level) return;
		console.debug(...args);
	}

	public info(...args: any[]) {
		if (LogLevel.INFO < this.level) return;
		console.info(...args);
	}

	public warn(...args: any[]) {
		if (LogLevel.WARN < this.level) return;
		console.warn(...args);
	}

	public error(...args: any[]) {
		if (LogLevel.ERROR < this.level) return;
		console.error(...args);
	}
}
