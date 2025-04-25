import {LogLevel} from "./types";

function NewLogLevel(str?: string): LogLevel {
	str = str || "info";
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

function Trace(...args: any[]) {
	const level = NewLogLevel(process.env["NEXT_PUBLIC_LOG_LEVEL"]);
	if (LogLevel.TRACE < level) return;
	console.log(new Date(), "TRACE", ...args);
}

function Debug(...args: any[]) {
	const level = NewLogLevel(process.env["NEXT_PUBLIC_LOG_LEVEL"]);
	if (LogLevel.DEBUG < level) return;
	console.log(new Date(), "DEBUG", ...args);
}

function Info(...args: any[]) {
	const level = NewLogLevel(process.env["NEXT_PUBLIC_LOG_LEVEL"]);
	if (LogLevel.INFO < level) return;
	console.log(new Date(), "INFO", ...args);
}

function Warn(...args: any[]) {
	const level = NewLogLevel(process.env["NEXT_PUBLIC_LOG_LEVEL"]);
	if (LogLevel.WARN < level) return;
	console.log(new Date(), "WARN", ...args);
}

function Error(...args: any[]) {
	const level = NewLogLevel(process.env["NEXT_PUBLIC_LOG_LEVEL"]);
	if (LogLevel.ERROR < level) return;
	console.log(new Date(), "ERROR", ...args);
}

export default {
	Trace,
	Debug,
	Info,
	Warn,
	Error,
};
