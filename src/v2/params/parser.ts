import {fnRegexp} from "..";

type Parser<T> = (str: string) => T;

const fnSearchParamParser = {
	objectId: (def?: string): Parser<string> => {
		return (str) => {
			if (new RegExp(fnRegexp.objectId).test(str)) return str;
			return def ?? "";
		};
	},
	number: (def?: number): Parser<number> => {
		return (str) => {
			if (new RegExp(fnRegexp.number).test(str)) return Number(str);
			return def ?? 0;
		};
	},
	decimal: (def?: number): Parser<number> => {
		return (str) => {
			if (new RegExp(fnRegexp.decimal).test(str)) return Number(str);
			return def ?? 0;
		};
	},
	string: (def?: string): Parser<string> => {
		return (str) => {
			if (!str) return def ?? "";
			return str;
		};
	},
	pattern: (regexp: string, def?: string): Parser<string> => {
		return (str) => {
			if (new RegExp(regexp).test(str)) return str;
			return def ?? "";
		};
	},
};

export default fnSearchParamParser;
