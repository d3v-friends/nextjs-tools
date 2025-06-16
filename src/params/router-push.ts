"use client";

import {useRouter} from "next/navigation";

export default function (params: Record<string, string | number | null | undefined>, host?: string) {
	const router = useRouter();

	const u = new URLSearchParams(window.location.search);
	for (const key in params) {
		if (params[key]) {
			u.set(key, params[key].toString());
		} else {
			u.delete(key);
		}
	}

	host = host || window.location.pathname;

	router.push(`${host}?${u.toString()}`);
}
