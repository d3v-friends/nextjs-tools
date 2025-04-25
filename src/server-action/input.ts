import {InputAttributes} from "./types";

function string({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function strings({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp,
	nullable,
	inputFormat = "csv",
	inputType = "string",
	value = [],
}: Partial<InputAttributes<string[]>>): InputAttributes<string[]> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function username({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "^[a-z][a-z|0-9]{3,20}$",
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function password({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "^[a-z0-9A-Z~`!@#$%^&*\(\)\\-_=+\\[{\\]}\\\\\|;:'\",<.>/?]{7,20}$",
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function otp({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "^[0-9]{6}$",
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function ip({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b",
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function lowerSnakeCase({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "^[a-z0-9_]+$",
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function rfc3339Time({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "^((?:(\\d{4}-\\d{2}-\\d{2})T(\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?))(Z|[\\+-]\\d{2}:\\d{2})?)$",
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function objectID({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "^[a-z0-9]{24}$",
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
}: Partial<InputAttributes<string>>): InputAttributes<string> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function port({
	name,
	defaultValue = "0",
	type = "number",
	autoComplete,
	inputMode = "numeric",
	hidden,
	regexp = "^[a-z0-9_]+$",
	nullable,
	inputFormat = "text",
	inputType = "number",
	value = 0,
}: Partial<InputAttributes<number>>): InputAttributes<number> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function number({
	name,
	defaultValue = "0",
	type = "number",
	autoComplete,
	inputMode = "numeric",
	hidden,
	regexp = "^-?\\d+(\\.\\d+)?$",
	nullable,
	inputFormat = "text",
	inputType = "number",
	value = 0,
}: Partial<InputAttributes<number>>): InputAttributes<number> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

function numbers({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = "^-?\\d+(\\.\\d+)?$",
	nullable,
	inputFormat = "csv",
	inputType = "number",
	value = [],
}: Partial<InputAttributes<number[]>>): InputAttributes<number[]> {
	return {
		name,
		defaultValue,
		type,
		autoComplete,
		inputMode,
		hidden,
		regexp,
		nullable,
		inputFormat,
		inputType,
		value,
	};
}

export default {
	string,
	strings,
	username,
	password,
	otp,
	rfc3339Time,
	lowerSnakeCase,
	ip,
	objectID,
	number,
	port,
	numbers,
};
