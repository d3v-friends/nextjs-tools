import regexp from "../regexp";

type Parser<T> = (str: string) => T;

export default {
	objectId: (def?: string): Parser<string> => {
		return (str) => {
			if (new RegExp(regexp.objectId).test(str)) return str;
			return def ?? "";
		};
	},
	naturalNumber: (def?: number): Parser<number> => {
		return (str) => {
			if (new RegExp(regexp.naturalNumber).test(str)) return Number(str);
			return def ?? 0;
		};
	},
	decimal: (def?: string): Parser<string> => {
		return (str) => {
			if (new RegExp(regexp.decimal).test(str)) return str;
			return def ?? "0.0";
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
	rfc3339: (def?: string): Parser<string> => {
		const iso3339Regexp =
			/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(\.\d+)?(Z|[+-]([01]\d|2[0-3]):([0-5]\d))$/;
		const regexp = new RegExp(iso3339Regexp);
		return (str) => {
			if (regexp.test(str)) return str;
			return def ?? "";
		};
	},
	pagination: (def?: number): Parser<number> => {
		return (str) => {
			if (str === "") return def ?? 0;
			if (new RegExp(/^(0|[1-9]\d*)$/).test(str)) return parseInt(str);
			return def ?? 0;
		};
	},
};
