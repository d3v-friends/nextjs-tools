"use client";

import {useState} from "react";

type Fn<I extends any[], R> = (...i: I) => Promise<R>;

// promise 실생히 로딩뷰를 띄우거나 버튼의 비활성이 필요할때 사용한다.
export default function <I extends any[], R>(fn: Fn<I, R>): [boolean, Fn<I, R>] {
	const [pending, onChangePending] = useState(false);

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
