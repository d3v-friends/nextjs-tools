import {boolean as clBoolean, number as clNumber, string as clString} from "./client";
import {boolean as svBoolean, number as svNumber, string as svString} from "./server";

const fnEnv = {
	server: {
		string: svString,
		number: svNumber,
		boolean: svBoolean,
	},
	client: {
		string: clString,
		number: clNumber,
		boolean: clBoolean,
	},
};

export {fnEnv};
