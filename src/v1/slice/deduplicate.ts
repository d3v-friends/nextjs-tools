export default function <T>(list: T[], compare: (a: T, b: T) => boolean): T[] {
	const res: T[] = [];

	for (let elem of list) {
		const idx = res.findIndex((v) => compare(v, elem));
		if (idx !== -1) continue;
		res.push(elem);
	}

	return res;
}
