const fnCsv = {
	join: <T extends string>(v: T[]): string => {
		return v.join(",");
	},
	split: (str: string): string[] => {
		if (str === "") return [];
		return str.split(",").map((v) => v.trim());
	},
	has: (csv: string, value: string): boolean => {
		const ls = fnCsv.split(csv);
		return ls.includes(value);
	},
	pop: (str: string, value: string): string => {
		let ls = fnCsv.split(str);
		const idx = ls.findIndex((v) => v === value);
		if (idx === -1) return str;
		ls = [...ls.slice(0, idx), ...ls.slice(idx + 1)];
		return ls.join(",");
	},
	push: (str: string, value: string): string => {
		const ls = fnCsv.split(str);
		if (fnCsv.has(str, value)) return str;
		return [...ls, value].join(",");
	},
};

export default fnCsv;
