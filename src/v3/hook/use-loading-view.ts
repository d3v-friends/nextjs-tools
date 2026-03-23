"use client";

import {ReactNode, useEffect, useState} from "react";

type Fn<I extends any[], R> = (...i: I) => Promise<R>;

export default function <I extends any[], R>(fn: Fn<I, R>, view: ReactNode, delay = 1000): [boolean, Fn<I, R>] {
	const [pending, onChangePending] = useState(false);

	useEffect(() => {}, [pending]);

	return [
		pending,
		async (...i) => {
			onChangePending(true);
			try {
				return await fn(...i);
			} finally {
				onChangePending(false);
			}
		},
	];
}
