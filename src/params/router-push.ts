"use client";

import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function (
	router: AppRouterInstance,
	params: Record<string, string | number | null | undefined>,
	host?: string
) {
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
