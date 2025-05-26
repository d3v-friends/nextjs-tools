"use client";

import {useSearchParams} from "next/navigation";

type Params<KEY extends string> = Record<KEY, string | number>;

export default function <KEY extends string>(initParams: Params<KEY>): Params<KEY> {
	const params = useSearchParams();
	const res: any = {};
	for (let key in initParams) {
		switch (typeof initParams[key]) {
			case "number":
				const value = params.get(key);
				if (!value) {
					res[key] = initParams[key];
					continue;
				}

				if (Number.isNaN(Number(value))) {
					res[key] = initParams[key];
					continue;
				}

				res[key] = Number(value);
				break;
			default:
				// 기본은 string 타입
				res[key] = params.get(key) || initParams[key];
		}
	}
	return res as Params<KEY>;
}
