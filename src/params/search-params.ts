"use client";
export default function searchParams(params: Record<string, string | number>, host?: string): string {
	const u = new URLSearchParams(window.location.search);
	for (const key in params) {
		u.set(key, params[key].toString());
	}

	host = host || window.location.pathname;

	return `${host}?${u.toString()}`;
}
