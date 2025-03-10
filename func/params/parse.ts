"use server";

import {NextPageSearchParams} from "../types";

export default async function <T extends Record<string, string | string[] | number | null>>(
	params: Promise<NextPageSearchParams>,
	initParams: T
): Promise<T> {
	const p = await params;
	const res: any = {};
	for (const key in initParams) {
		if (!p.hasOwnProperty(key)) {
			res[key] = initParams[key];
			continue;
		}

		if (p[key] instanceof Array) {
			res[key] = p[key] || initParams[key];
			continue;
		}

		switch (typeof initParams[key]) {
			case "number":
				res[key] = Number.isNaN(p[key]) ? 0 : Number(p[key]);
				break;
			case "string":
				res[key] = p[key];
				break;
			case "undefined":
				res[key] = null;
				break;
			default:
				res[key] = initParams[key];
				break;
		}
	}

	return res as T;
}
