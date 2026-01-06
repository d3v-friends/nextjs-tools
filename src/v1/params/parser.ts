import {fnRegexp} from "../..";

const fnSearchParamParser = {
	objectId: (def?: string): ((str: string) => string) => {
		return (str) => {
			if (new RegExp(fnRegexp.objectId).test(str)) return str;
			return def ?? "";
		};
	},
	number: (def?: number): ((str: string) => number) => {
		return (str) => {
			if (new RegExp(fnRegexp.number).test(str)) return Number(str);
			return def ?? 0;
		};
	},
	decimal: (def?: number): ((str: string) => number) => {
		return (str) => {
			if (new RegExp(fnRegexp.decimal).test(str)) return Number(str);
			return def ?? 0;
		};
	},
};

export default fnSearchParamParser;
