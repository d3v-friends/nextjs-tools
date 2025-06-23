"use client";

import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function (
	router: AppRouterInstance,
	params: Record<string, Date | string | number | null | undefined>,
	host?: string
) {
	const u = new URLSearchParams(window.location.search);
	for (const key in params) {
		if (params[key]) {
			if (params[key] instanceof Date) {
				u.set(key, params[key].toISOString());
				continue;
			}

			switch (typeof params[key]) {
				case "number":
					u.set(key, String(params[key]));
					break;
				case "string":
					u.set(key, params[key]);
					break;
				default:
					u.delete(key);
			}
		} else {
			u.delete(key);
		}
	}

	host = host || window.location.pathname;
	router.push(`${host}?${u.toString()}`);
}
