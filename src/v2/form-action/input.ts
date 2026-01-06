import {fnParser, fnRegexp} from "../..";
import {EntryParser, Input, InputValue} from "./types";

type RegexpInput = Partial<Omit<Input<string>, "entryParser">> & {regexp: string};
type OmitParserInput<T extends InputValue> = Omit<Input<T>, "entryParser">;

function stringParser(regexp: string): EntryParser<string> {
	return (v) => {
		if (typeof v !== "string") return {value: "", error: new Error(`invalid_string: value=${v}, regexp=${regexp}`)};
		const str = v.trim();
		if (!new RegExp(regexp).test(str))
			return {
				value: "",
				error: new Error(`invalid_string: value=${v}, regexp=${regexp}`),
			};
		return {value: str};
	};
}

function stringsParser(regexp: string): EntryParser<string[]> {
	return (v) => {
		if (typeof v !== "string")
			return {
				value: [],
				error: new Error(`invalid_strings: value=${v}, regexp=${regexp}`),
			};
		const str = v.trim();

		if (!str) return {value: [], error: new Error(`invalid_strings: value=${v}, regexp=${regexp}`)};
		const ls = str.split(",");
		const r = new RegExp(regexp);

		for (let item of ls) {
			if (!r.test(item))
				return {
					value: [],
					error: new Error(`invalid_strings: item=${item}, value=${v}, regexp=${regexp}`),
				};
		}

		return {value: ls};
	};
}

function numberParser(): EntryParser<number> {
	return (v) => {
		if (typeof v !== "string") return {value: 0, error: new Error(`invalid_number: value=${v}`)};
		const str = v.trim();
		return {value: fnParser.number(str)};
	};
}

function numbersParser(): EntryParser<number[]> {
	return (v) => {
		if (typeof v !== "string") return {value: [], error: new Error(`invalid_numbers: value=${v}`)};
		const str = v.trim();
		if (!str) return {value: [], error: new Error(`invalid_numbers: value=${v}`)};

		const ls: number[] = [];
		for (let item of str.split(",")) {
			if (fnParser.isNumber(item)) {
				return {value: [], error: new Error(`invalid_numbers: item=${item}, value=${v}`)};
			}
			ls.push(fnParser.number(item));
		}

		return {value: ls};
	};
}

function integerParser(): (v: FormDataEntryValue) => number {
	return (v) => {
		if (typeof v !== "string") return 0;
		const str = v.trim();
		return fnParser.integer(str);
	};
}

/* -------------------------------------------------------------------------------------------------- */

function username({type = "text", autoComplete = "on", inputMode = "text"}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.username),
		type,
		autoComplete,
		inputMode,
	};
}

function password({
	type = "password",
	autoComplete = "on",
	inputMode = "text",
}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.password),
		type,
		autoComplete,
		inputMode,
	};
}

function otp({type = "text", autoComplete = "on", inputMode = "text"}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.otp),
		type,
		autoComplete,
		inputMode,
	};
}

function ipv4({type = "text", autoComplete = "on", inputMode = "text"}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.ipv4),
		type,
		autoComplete,
		inputMode,
	};
}

function ipv6({type = "text", autoComplete = "on", inputMode = "text"}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.ipv6),
		type,
		autoComplete,
		inputMode,
	};
}

function lowerSnakeCase({
	type = "text",
	autoComplete = "on",
	inputMode = "text",
}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.lowerSnakeCase),
		type,
		autoComplete,
		inputMode,
	};
}

function rfc3339Time({type = "text", autoComplete = "on", inputMode = "text"}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.rfc3339Time),
		type,
		autoComplete,
		inputMode,
	};
}

function objectId({type = "text", autoComplete = "on", inputMode = "text"}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.objectId),
		type,
		autoComplete,
		inputMode,
	};
}

function port({type = "text", autoComplete = "on", inputMode = "numeric"}: OmitParserInput<string>): Input<string> {
	return {
		entryParser: stringParser(fnRegexp.port),
		type,
		autoComplete,
		inputMode,
	};
}

function strings({regexp, type = "text", autoComplete = "on", inputMode = "text"}: RegexpInput): Input<string[]> {
	return {
		entryParser: stringsParser(regexp),
		type,
		autoComplete,
		inputMode,
	};
}

function number({type, autoComplete, inputMode}: OmitParserInput<number>): Input<number> {
	return {
		entryParser: numberParser(),
		type,
		autoComplete,
		inputMode,
	};
}

function numbers({type, autoComplete, inputMode}: OmitParserInput<number[]>): Input<number[]> {
	return {
		entryParser: numbersParser(),
		type,
		autoComplete,
		inputMode,
	};
}

function regexp({regexp, type = "text", autoComplete = "on", inputMode = "text"}: RegexpInput): Input<string> {
	return {
		entryParser: stringParser(regexp),
		type,
		autoComplete,
		inputMode,
	};
}

export default {
	username,
	password,
	otp,
	ipv4,
	ipv6,
	lowerSnakeCase,
	rfc3339Time,
	objectId,
	port,
	regexp,
	strings,
	number,
	numbers,
};
