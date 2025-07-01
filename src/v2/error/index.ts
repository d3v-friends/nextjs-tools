type Parser = (str: string) => string;

const fnError = {
	parse: (record: Record<string, string>): Parser => {
		return (str) => {
			for (const key in record) {
				if (str.includes(key)) return record[key];
			}
			return str;
		};
	},
};

export default fnError;
