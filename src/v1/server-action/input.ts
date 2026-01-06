import {InputAttributes} from "..";
import fnRegexp from "./regexp";

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
	invalidMessage,
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
		invalidMessage,
	};
}

function boolean({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.boolean,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage,
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
		invalidMessage,
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
	invalidMessage,
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
		invalidMessage,
	};
}

function username({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.username,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage = "아이디를 확인하여 주십시오.",
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
		invalidMessage,
	};
}

function password({
	name,
	defaultValue = "",
	type = "password",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.password,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage = "비밀번호를 확인하여 주십시오.",
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
		invalidMessage,
	};
}

function otp({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.otp,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage = "OTP 를 확인하여 주십시오.",
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
		invalidMessage,
	};
}

function ip({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.ipv4,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage = "IP 를 확인하여 주십시오.",
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
		invalidMessage,
	};
}

function lowerSnakeCase({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.lowerSnakeCase,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage = "내용을 확인하여 주십시오. (lower_snake_case)",
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
		invalidMessage,
	};
}

function rfc3339Time({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.rfc3339Time,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage = "시간을 확인하여 주십시오.",
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
		invalidMessage,
	};
}

function objectID({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.objectId,
	nullable,
	inputFormat = "text",
	inputType = "string",
	value = "",
	invalidMessage = "ObjectID 값을 확인하여 주십시오.",
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
		invalidMessage,
	};
}

function port({
	name,
	defaultValue = "0",
	type = "number",
	autoComplete,
	inputMode = "numeric",
	hidden,
	regexp = fnRegexp.port,
	nullable,
	inputFormat = "text",
	inputType = "number",
	value = 0,
	invalidMessage = "Port 번호를 확인하여 주십시오.",
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
		invalidMessage,
	};
}

function number({
	name,
	defaultValue = "0",
	type = "number",
	autoComplete,
	inputMode = "numeric",
	hidden,
	regexp = fnRegexp.number,
	nullable,
	inputFormat = "text",
	inputType = "number",
	value = 0,
	invalidMessage,
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
		invalidMessage,
	};
}

function decimal({
	name,
	defaultValue = "0",
	type = "number",
	autoComplete,
	inputMode = "numeric",
	hidden,
	regexp = fnRegexp.decimal,
	nullable,
	inputFormat = "text",
	inputType = "number",
	value = 0,
	invalidMessage,
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
		invalidMessage,
	};
}

function numbers({
	name,
	defaultValue = "",
	type = "text",
	autoComplete,
	inputMode = "text",
	hidden,
	regexp = fnRegexp.number,
	nullable,
	inputFormat = "csv",
	inputType = "number",
	value = [],
	invalidMessage,
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
		invalidMessage,
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
	decimal,
};
