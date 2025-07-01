type Parser = (str: string) => string;

function parse(record: Record<string, string>): Parser {
	return (str) => {
		for (const key in record) {
			if (str.includes(key)) return record[key];
		}
		return str;
	};
}

export default {
	parse,
};
