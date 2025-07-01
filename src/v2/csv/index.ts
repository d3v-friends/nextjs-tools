function join<T extends string>(v: T[]): string {
	return v.join(",");
}

function split(str: string): string[] {
	if (str === "") return [];
	return str.split(",").map((v) => v.trim());
}

function has(csv: string, value: string): boolean {
	const ls = split(csv);
	return ls.includes(value);
}

function pop(str: string, value: string): string {
	let ls = split(str);
	const idx = ls.findIndex((v) => v === value);
	if (idx === -1) return str;
	ls = [...ls.slice(0, idx), ...ls.slice(idx + 1)];
	return ls.join(",");
}

function push(str: string, value: string): string {
	const ls = split(str);
	if (has(str, value)) return str;
	return [...ls, value].join(",");
}

export default {
	join,
	split,
	has,
	pop,
	push,
};
