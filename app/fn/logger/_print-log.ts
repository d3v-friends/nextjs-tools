"use server";

import {getLogger, LogLevel} from "@src";

export default async function (level: LogLevel = LogLevel.INFO) {
	const logger = await getLogger();
	logger.setLevel(LogLevel.TRACE);

	switch (level) {
		case LogLevel.INFO:
			logger.info("hello_world");
			break;
		case LogLevel.WARN:
			logger.warn("hello_world");
			break;
		case LogLevel.DEBUG:
			logger.debug("hello_world");
			break;
		case LogLevel.TRACE:
			logger.trace("hello_world");
			break;
		case LogLevel.ERROR:
			logger.error("hello_world");
			break;
	}
}
