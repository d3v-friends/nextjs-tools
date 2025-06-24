import {fnReflect, fnRegexp, Nullable} from "@root";

const parser = {
	number: (str: string): Nullable<number> => {
		return fnReflect.numberNull(str);
	},
	objectId: (str: string): Nullable<string> => {
		if (new RegExp(fnRegexp.objectId).test(str)) return str;
		return null;
	},
};

export default parser;
