"use client";
export default function searchParams(params: Record<string, string | number | null>, host?: string): string {
	const u = new URLSearchParams(window.location.search);
	for (const key in params) {
		if (params[key]) {
			u.set(key, params[key].toString());
		} else {
			u.delete(key);
		}
	}

	host = host || window.location.pathname;

	return `${host}?${u.toString()}`;
}
