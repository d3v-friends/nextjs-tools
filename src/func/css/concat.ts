import {Nullable} from "@func/types";

export default function (...args: Nullable<string | boolean>[]): string {
	let res = "";
	for (const arg of args) {
		if (!arg) {
			continue;
		}

		switch (typeof arg) {
			case "string":
				res = `${res} ${String(arg)}`;
				break;
			case "boolean":
				break;
		}
	}
	res = res.replaceAll("  ", " ");
	return res.slice(1, res.length);
}
