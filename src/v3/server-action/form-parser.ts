import {Nullable} from "../../types";

function string(form: FormData, key: string): Nullable<string> {
	const entry = form.get(key);
	if (!entry) return null;

	if (typeof entry !== "string") return null;

	return entry;
}

function integer(form: FormData, key: string): Nullable<number> {
	const str = string(form, key);
	if (!str) return null;
	return toInteger(str, key);
}

function decimal(form: FormData, key: string): Nullable<number> {
	const str = string(form, key);
	if (!str) return null;
	return toDecimal(str, key);
}

function strings(form: FormData, key: string): string[] {
	const str = string(form, key);
	if (!str) return [];
	if (str === "") return [];
	return str.split(",");
}

function integers(form: FormData, key: string): number[] {
	const str = strings(form, key);
	if (!str) return [];
	if (str.length === 0) return [];

	const res: number[] = [];

	for (const n of str) {
		res.push(toInteger(n, key));
	}

	return res;
}

function decimals(form: FormData, key: string): number[] {
	const str = strings(form, key);
	if (!str) return [];
	if (str.length === 0) return [];

	const res: number[] = [];

	for (const n of str) {
		res.push(toDecimal(n, key));
	}

	return res;
}

function toInteger(str: string, key: string = ""): number {
	const res = parseInt(str);
	if (isNaN(res)) throw new Error(`invalid_integer: form_key=${key}, value=${str}`);
	return res;
}

function toDecimal(str: string, key: string = ""): number {
	const res = parseFloat(str);
	if (isNaN(res)) throw new Error(`invalid_decimal: form_key=${key}, value=${str}`);
	return res;
}

export default {string, integer, decimal, strings, integers, decimals};
