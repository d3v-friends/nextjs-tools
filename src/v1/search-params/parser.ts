import {fnReflect, fnRegexp} from "@root";

type FnParser<T> = (str: string) => T;

const parser = {
	number: (def: number): FnParser<number> => {
		return (str) => {
			return fnReflect.number(str, def);
		};
	},
	objectId: (def: string): FnParser<string> => {
		return (str) => {
			if (new RegExp(fnRegexp.objectId).test(str)) return str;
			return def;
		};
	},
	string: (list: string[], def: string): FnParser<string> => {
		return (str) => {
			if (list.includes(str)) return str;
			return def;
		};
	},
};

export default parser;
