import {LogLevel} from "./types";

export class Logger {
	private readonly ansiEndKey = "\x1b[0m";
	private readonly ansiBlueKey = "\x1b[34m";
	private readonly ansiRedKey = "\x1b[31m";
	private readonly ansiYellowKey = "\x1b[33m";
	private readonly ansiWhiteKey = "\x1b[37m";
	private readonly ansiGrayKey = "\x1b[90m";

	constructor(private level = LogLevel.INFO) {}

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

	public setLevel(level: LogLevel) {
		this.level = level;
	}

	public getLevel(): LogLevel {
		return this.level;
	}

	public trace(i: any = {}) {
		if (LogLevel.TRACE < this.level) return;
		console.trace(...this.wrapTrace(JSON.stringify(i)));
	}

	public debug(i: any = {}) {
		if (LogLevel.DEBUG < this.level) return;
		console.debug(...this.wrapDebug(JSON.stringify(i)));
	}

	public info(i: any = {}) {
		if (LogLevel.INFO < this.level) return;
		console.info(...this.wrapInfo(JSON.stringify(i)));
	}

	public warn(i: any = {}) {
		if (LogLevel.WARN < this.level) return;
		console.warn(...this.wrapWarn(JSON.stringify(i)));
	}

	public error(i: any = {}) {
		if (LogLevel.ERROR < this.level) return;
		console.error(...this.wrapError(JSON.stringify(i)));
	}

	private isServer(): boolean {
		return typeof window === "undefined";
	}

	private wrapInfo(args: string = ""): string[] {
		if (this.isServer()) {
			return [this.ansiBlueKey, `[INFO_]`, this.ansiEndKey, new Date().toISOString(), args];
		}

		return ["%c[INFO_]", "color: blue", new Date().toISOString(), args];
	}

	private wrapTrace(args: string = ""): string[] {
		if (this.isServer()) {
			return [this.ansiGrayKey, `[TRACE]`, this.ansiEndKey, new Date().toISOString(), args];
		}

		return ["%c[TRACE]", "color: gray", new Date().toISOString(), args];
	}

	private wrapError(args: string = ""): string[] {
		if (this.isServer()) {
			return [this.ansiRedKey, `[ERROR]`, this.ansiEndKey, new Date().toISOString(), args];
		}
		return ["%c[ERROR]", "color: red", new Date().toISOString(), args];
	}

	private wrapWarn(args: string = ""): string[] {
		if (this.isServer()) {
			return [this.ansiYellowKey, `[WARN_]`, this.ansiEndKey, new Date().toISOString(), args];
		}
		return ["%c[WARN_]", "color: yellow", new Date().toISOString(), args];
	}

	private wrapDebug(args: string = ""): string[] {
		if (this.isServer()) {
			return [this.ansiWhiteKey, `[DEBUG]`, this.ansiEndKey, new Date().toISOString(), args];
		}
		return ["%c[DEBUG]", "color: white", new Date().toISOString(), args];
	}
}
