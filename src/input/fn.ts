import {Nullable} from "..";
import {
	errInvalidFormValueRegexp,
	errInvalidFormValueType,
	FormHelper,
	HTMLInputAttributes,
	InputHelper,
} from "./types";

function inputAttributes<INPUT>(i: InputHelper<INPUT>): HTMLInputAttributes {
	return {
		name: i.name,
		defaultValue: String(i.defaultValue),
		type: i.type,
		autoComplete: i.autoComplete,
		inputMode: i.inputMode,
	};
}

function parseArray({
	origin,
	name,
	regexp,
	throws,
}: Readonly<{
	origin: string;
	name: string;
	regexp: string;
	throws: boolean;
}>): string[] {
	const split = origin.split(",");
	if (split.length === 0) return split;

	const r = new RegExp(regexp);

	const res: string[] = [];
	for (const elem of split) {
		if (!r.test(elem)) {
			if (throws) {
				throw new Error(`${errInvalidFormValueRegexp}: name=${name}, value=${elem}, regexp=${regexp}`);
			}
			continue;
		}

		res.push(elem);
	}

	return res;
}

function parseNumber({
	origin,
	name,
	throws,
}: Readonly<{
	origin: string[];
	name: string;
	throws: boolean;
}>): number[] {
	const res: number[] = [];

	for (const elem of origin) {
		if (Number.isNaN(elem)) {
			if (throws) {
				throw new Error(`${errInvalidFormValueType}: name=${name}, value=${elem}, type=number`);
			}
			continue;
		}
		res.push(Number(elem));
	}

	return res;
}

function parseBoolean({
	origin,
}: Readonly<{
	origin: string[];
}>): boolean[] {
	const res: boolean[] = [];

	for (const elem of origin) {
		res.push(elem === "true");
	}

	return res;
}

function formField<T>(form: FormData, input: InputHelper<T>, ...throws: boolean[]): Nullable<T> {
	const entry = form.get(input.name);
	if (!entry && input.nullable) return null;

	const t = throws.length === 1 ? throws[0] : false;
	if (typeof entry !== "string") {
		if (input.nullable) return null;
	}

	const origin = entry as string;
	switch (input.valueFormat) {
		case "text":
			const valid = new RegExp(input.regexp).test(origin);
			if (!valid && t) {
				throw new Error(
					`${errInvalidFormValueRegexp}: name=${input.name}, value=${entry}, regexp=${input.regexp}`
				);
			}

			switch (input.valueType) {
				case "string":
					return origin as T;
				case "number":
					if (Number.isNaN(origin)) {
						if (t) {
							throw new Error(
								`${errInvalidFormValueType}: name=${input.name}, value=${entry}, type=number`
							);
						}
						return input.defaultValue as T;
					}
					return Number(origin) as T;
				case "boolean":
					return (origin === "true") as T;
				default:
					throw new Error(`invalid_input_value_type: name=${input.name}, value_type=${input.valueType}`);
			}
		case "csv":
			const ls = parseArray({
				origin,
				regexp: input.regexp,
				name: input.name,
				throws: t,
			});

			switch (input.valueType) {
				case "string":
					return ls as T;
				case "number":
					return parseNumber({origin: ls, name: input.name, throws: t}) as T;
				case "boolean":
					return parseBoolean({origin: ls}) as T;
				default:
					throw new Error(`invalid_input_value_type: name=${input.name}, value_type=${input.valueType}`);
			}
		default:
			throw new Error(`invalid_input_value_format: name=${input.name}, value_format=${input.valueFormat}`);
	}
}

function formFieldAll<INPUT>(form: FormData, helper: FormHelper<INPUT>, ...throws: boolean[]): INPUT {
	const res: any = {};
	for (const name in helper) {
		res[name] = formField(form, helper[name], ...throws);
	}
	return res as INPUT;
}

function formValue<INPUT>(form: FormData, helper: FormHelper<INPUT>): Record<keyof INPUT, string> {
	const res: any = {};
	for (const name in helper) {
		const entry = form.get(name);
		if (!entry) {
			res[name] = "";
			continue;
		}
		if (typeof entry !== "string") {
			res[name] = "";
			continue;
		}

		res[name] = entry;
	}

	return res as Record<keyof INPUT, string>;
}

function initValue<INPUT>(helper: FormHelper<INPUT>): Record<keyof INPUT, string> {
	const res: any = {};
	for (const name in helper) {
		res[name] = helper[name].defaultValue;
	}
	return res as Record<keyof INPUT, string>;
}

function initInput<INPUT>(helper: FormHelper<INPUT>): INPUT {
	const res: any = {};
	for (const name in helper) {
		if (!helper[name].defaultValue && helper[name].nullable) {
			res[name] = null;
			continue;
		}
		res[name] = helper[name].defaultValue;
	}
	return res as INPUT;
}

export default {
	formField,
	formFieldAll,
	inputAttributes,
	initValue,
	initInput,
	formValue,
};
