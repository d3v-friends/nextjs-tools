import {string as svString, number as svNumber, boolean as svBoolean} from "@func/env/server";
import {string as clString, number as clNumber, boolean as clBoolean} from "@func/env/client";

const server = {
	string: svString, number: svNumber, boolean: svBoolean,
};

const client = {
	string: clString, number: clNumber, boolean: clBoolean,
};

export default {
	server,
	client,
};
