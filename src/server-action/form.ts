import {ActionForm, ActionFormValue, ActionFromString, InputAttributes} from "..";

function string<INPUT>(data: FormData, form: ActionForm<INPUT>): ActionFromString<INPUT> {
	const res: any = {};
	for (const name in form) {
		const entry = data.get(name);
		if (entry === null) {
			res[name] = null;
			continue;
		}

		if (typeof entry !== "string") {
			res[name] = null;
			continue;
		}

		res[name] = entry;
	}
	return res as ActionFromString<INPUT>;
}

function value<INPUT>(data: FormData, form: ActionForm<INPUT>): ActionFormValue<INPUT> {
	const str = string(data, form);

	const res: ActionFormValue<INPUT> = {
		input: defaultValue(form),
	};

	const input: any = {};
	for (const name in form) {
		if (!str.hasOwnProperty(name)) {
			if (form[name].nullable) {
				input[name] = null;
				continue;
			}
			res.err = `${name}_is_null`;
			return res;
		}

		switch (form[name].inputFormat) {
			case "csv":
				const list = parseList(str[name], form[name]);
				if (list.err) {
					res.err = list.err;
					return res;
				}
				input[name] = list.list;
				break;
			default:
				const value = parseValue(str[name], form[name]);
				if (value.err) {
					res.err = value.err;
					return res;
				}
				input[name] = value.value;
		}
	}

	res.input = input;
	return res;
}

type ParsedList<T> = {list: T[]; err?: string};

function parseList<T>(str: string, input: InputAttributes<T>): ParsedList<T> {
	const split = str.split(",").map((v) => v.trim());
	const res: ParsedList<T> = {list: []};
	const list: any[] = [];
	const r = new RegExp(input.regexp || "");

	for (const elem of split) {
		if (!r.test(elem)) {
			res.err = invalidMessage(elem, input.regexp);
			return res;
		}

		switch (input.inputType) {
			case "number":
				if (Number.isNaN(elem)) {
					res.err = invalidMessage(elem, input.regexp);
					return res;
				}
				list.push(Number(elem));
				break;
			default:
				list.push(elem);
		}
	}

	res.list = list;
	return res;
}

type ParsedValue<T> = {value: T; err?: string};

function parseValue<T>(str: string, input: InputAttributes<T>): ParsedValue<T> {
	const res: ParsedValue<T> = {
		value: input.value,
	};

	const regexp = new RegExp(input.regexp || "");
	if (!regexp.test(str)) {
		res.err = invalidMessage(str, input.regexp);
		return res;
	}

	switch (input.inputType) {
		case "number":
			if (Number.isNaN(str)) {
				res.err = invalidMessage(str, input.regexp);
				return res;
			}
			res.value = Number(str) as T;
			return res;
		default:
			res.value = str as T;
			return res;
	}
}

function defaultValue<INPUT>(form: ActionForm<INPUT>): INPUT {
	const res: any = {};
	for (const name in form) {
		res[name] = form[name].value;
	}
	return res as INPUT;
}

function defaultString<INPUT>(form: ActionForm<INPUT>): ActionFromString<INPUT> {
	const res: any = {};
	for (const name in form) {
		res[name] = form[name].defaultValue;
	}
	return res as ActionFromString<INPUT>;
}

function invalidMessage(value: string, regexp?: string): string {
	return `invalid_value: value=${value}${regexp ? `, regexp=${regexp}` : ""}`;
}

function createForm<INPUT>(form: ActionForm<INPUT>): ActionForm<INPUT> {
	for (const name in form) {
		form[name].name = name;
	}
	return form;
}

export default {
	string,
	value,
	defaultValue,
	defaultString,
	createForm,
};
