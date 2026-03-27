"use client";

import {ReactNode} from "react";

export const MODAL_CANCEL = "MODAL_CANCEL";

// 최상단 루트에 컴포넌트 추가해줘야 작동한다.
declare global {
	interface Promise<T> {
		// 직전 Promise가 boolean 을 리턴하면 작동
		// false 출력시 throw new Error(MODAL_CANCEL); 이 실행
		ok<TResult = T>(this: Promise<boolean>, fn: (value: T) => TResult | PromiseLike<TResult>): Promise<TResult>;

		// gFetch 리턴값일 때 사용가능
		gFetch<TResult>(
			this: Promise<[any, string | null]>,
			fn?: (value: T extends [infer GResult, string | null] ? GResult : never) => TResult | PromiseLike<TResult>
		): Promise<TResult>;

		// 클라이언트 사이드에서 catch 대신 사용
		error(book?: Record<string, ReactNode>, fnAlert?: (message: string) => ReactNode): void;
	}
}

// gOkCancel 의 리턴값에 대해서 단순화
Promise.prototype.ok = function <T, TResult = T>(
	this: Promise<boolean>,
	fn: (value: T) => TResult | PromiseLike<TResult>
): Promise<TResult> {
	return this.then((value) => {
		if (!value) {
			throw new Error(MODAL_CANCEL);
		}
		return fn(value as any);
	});
};

Promise.prototype.error = function (book?: Record<string, ReactNode>, fnAlert?: (message: string) => void): void {
	this.catch((e) => {
		book = book || {};
		book[MODAL_CANCEL] = book[MODAL_CANCEL] || null;
		fnAlert = fnAlert || ((message) => alert(message));

		const message = e instanceof Error ? e.message : JSON.stringify(e);

		for (const key in book) {
			if (!message.includes(key)) continue;
			if (!book[key]) return;

			fnAlert(message);
			return;
		}

		fnAlert(message);
	});
};

// gFetch 의 리턴 방식인 [T, string] 일 때 정상 작동한다.
Promise.prototype.gFetch = function <T, TResult = T, GResult = any>(
	this: Promise<[GResult, string | null]>,
	fn?: (value: T extends [infer GResult, string | null] ? GResult : never) => TResult | PromiseLike<TResult>
): Promise<TResult> {
	return this.then((value) => {
		const [data, message] = value;

		if (message) {
			throw new Error(message);
		}

		return fn ? fn(data as any) : (value as TResult);
	});
};

export default function () {
	return null;
}
