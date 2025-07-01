"use client";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

class RouterTools {
	constructor(public readonly router: AppRouterInstance) {}

	push(
		router: AppRouterInstance,
		searchParams: Record<string, Date | string | number | null | undefined | string[] | number[]>,
		host?: string
	) {
		const u = new URLSearchParams(window.location.search);
		for (const key in searchParams) {
			if (searchParams[key]) {
				if (searchParams[key] instanceof Date) {
					u.set(key, searchParams[key].toISOString());
					continue;
				}

				if (Array.isArray(searchParams[key])) {
					u.set(key, searchParams[key].map((v) => String(v).trim()).join(","));
				}

				switch (typeof searchParams[key]) {
					case "number":
						u.set(key, String(searchParams[key]));
						break;
					case "string":
						u.set(key, searchParams[key]);
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
}

export default function (router: AppRouterInstance): RouterTools {
	return new RouterTools(router);
}
