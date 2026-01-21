"use client";
import React, {ReactNode} from "react";
import {Button} from "@comp";
import printLog from "./_print-log";
import {LogLevel, useLogger} from "@src";

export default function () {
	return (
		<>
			<Server />
			<div className="h-10" />
			<Client />
		</>
	);
}

interface ClientProps {
	children?: ReactNode;
}

function Client({}: Readonly<ClientProps>) {
	const logger = useLogger();
	logger.setLevel(LogLevel.TRACE);

	return (
		<>
			<h1>client side</h1>
			<Button
				onClick={() => {
					logger.info({hello: "world"});
				}}>
				info
			</Button>
			<Button
				onClick={() => {
					logger.trace({hello: "world"});
				}}>
				trace
			</Button>
			<Button
				onClick={() => {
					logger.debug({hello: "world"});
				}}>
				debug
			</Button>
			<Button
				onClick={() => {
					logger.error({hello: "world"});
				}}>
				error
			</Button>
			<Button
				onClick={() => {
					logger.warn({hello: "world"});
				}}>
				warn
			</Button>
		</>
	);
}

interface ServerProps {
	children?: ReactNode;
}

function Server({}: Readonly<ServerProps>) {
	return (
		<>
			<h1>server side</h1>
			<Button
				onClick={async () => {
					await printLog(LogLevel.INFO);
				}}>
				info
			</Button>
			<Button
				onClick={async () => {
					await printLog(LogLevel.TRACE);
				}}>
				trace
			</Button>
			<Button
				onClick={async () => {
					await printLog(LogLevel.DEBUG);
				}}>
				debug
			</Button>
			<Button
				onClick={async () => {
					await printLog(LogLevel.ERROR);
				}}>
				error
			</Button>
			<Button
				onClick={async () => {
					await printLog(LogLevel.WARN);
				}}>
				warn
			</Button>
		</>
	);
}
