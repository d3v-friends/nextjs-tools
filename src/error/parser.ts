type Parser = (str: string) => string;

export default function (record: Record<string, string>): Parser {
	return (str) => {
		for (const key in record) {
			if (key.includes(str)) return record[key];
		}
		return str;
	};
}
