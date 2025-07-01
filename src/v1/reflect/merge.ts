export default function merge<T = object>(origin: T, partial: Partial<T>): T {
	const res = Object.assign({}, origin);
	for (let key in origin) {
		switch (typeof origin[key]) {
			case "object":
				if (partial.hasOwnProperty(key)) res[key] = merge(res[key], (partial as any)[key]);
				break;
			default:
				if (partial.hasOwnProperty(key)) (res as any)[key] = partial[key];
		}
	}

	return res;
}