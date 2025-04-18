"use client";

export default function (nextParams: Record<string, string>): string {
	const u = new URLSearchParams(window.location.search);

	for (const key in nextParams) {
		u.set(key, nextParams[key]);
	}

	return u.toString();
}
