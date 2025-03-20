import {boolean as clBoolean, number as clNumber, string as clString} from "./client";
import {boolean as svBoolean, number as svNumber, string as svString} from "./server";

const server = {
	string: svString,
	number: svNumber,
	boolean: svBoolean,
};

const client = {
	string: clString,
	number: clNumber,
	boolean: clBoolean,
};

export default {
	server,
	client,
};
