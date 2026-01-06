type Parser = (str: string) => string;

export default function (record: Record<string, string>): Parser {
	return (str) => {
		for (const key in record) {
			if (str.includes(key)) return record[key];
		}
		return str;
	};
}
