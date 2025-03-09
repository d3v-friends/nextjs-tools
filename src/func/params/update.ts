"use client";

export default function <T>(prevParams: T, nextParams: Partial<T>): string {
	let res = "";
	for (const key in prevParams) {
		res = `${res}&${key}=${nextParams.hasOwnProperty(key) ? nextParams[key] : prevParams[key]}`;
	}
	return res.slice(1, res.length);
}
