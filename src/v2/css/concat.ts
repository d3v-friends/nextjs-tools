function trim(str: string): string {
	str = str.replaceAll("\n", " ");
	str = str.replaceAll("\t", " ");
	while (str.includes("  ")) {
		str = str.replaceAll("  ", " ");
	}
	return str.trim();
}

function concat(...args: string[]): string {
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

export default function (...str: string[]): string {
	let res = concat(...str);
	return trim(res);
}
