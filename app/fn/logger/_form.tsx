"use client";
import React, {ReactNode} from "react";
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
			<h3>client side</h3>
			<div className="grid grid-cols-5 gap-2 lg:gap-4 mb-4">
				<button
					onClick={() => {
						logger.info({hello: "world"});
					}}>
					info
				</button>
				<button
					onClick={() => {
						logger.trace({hello: "world"});
					}}>
					trace
				</button>
				<button
					onClick={() => {
						logger.debug({hello: "world"});
					}}>
					debug
				</button>
				<button
					onClick={() => {
						logger.error({hello: "world"});
					}}>
					error
				</button>
				<button
					onClick={() => {
						logger.warn({hello: "world"});
					}}>
					warn
				</button>
			</div>
		</>
	);
}

interface ServerProps {
	children?: ReactNode;
}

function Server({}: Readonly<ServerProps>) {
	return (
		<>
			<h3>server side</h3>
			<div className="grid grid-cols-5 gap-2 lg:gap-4 mb-4">
				<button
					onClick={async () => {
						await printLog(LogLevel.INFO);
					}}>
					info
				</button>
				<button
					onClick={async () => {
						await printLog(LogLevel.TRACE);
					}}>
					trace
				</button>
				<button
					onClick={async () => {
						await printLog(LogLevel.DEBUG);
					}}>
					debug
				</button>
				<button
					onClick={async () => {
						await printLog(LogLevel.ERROR);
					}}>
					error
				</button>
				<button
					onClick={async () => {
						await printLog(LogLevel.WARN);
					}}>
					warn
				</button>
			</div>
		</>
	);
}
