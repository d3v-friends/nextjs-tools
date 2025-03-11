import {
	errNotFoundInputHelper,
	FnInput,
	FormArgs,
	FormHelper,
	InputHelper,
	InputOption,
	StringBool,
} from "@func/input/types";
import fnReflect from "@func/reflect";

function mergeOpts<T>(origin: InputHelper<T>, ...opts: Partial<InputHelper<T>>[]): InputHelper<T> {
	if (opts.length === 0) return origin;
	return fnReflect.merge(origin, opts[0]);
}

function username(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				defaultValue: "",
				regexp: "^[a-z][a-z|0-9]{3,20}$",
				invalidMessage: "아이디를 확인하여 주십시오.",
				type: "text",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

function password(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				defaultValue: "",
				regexp: "^[a-z0-9A-Z~`!@#$%^&*\(\)\\-_=+\\[{\\]}\\\\\|;:'\",<.>/?]{7,20}$",
				invalidMessage: "비밀번호를 확인하여 주십시오.",
				type: "password",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

function otp(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "^[0-9]{6}$",
				invalidMessage: "OTP 를 확인하여 주십시오. (6자리 숫자)",
				defaultValue: "",
				type: "number",
				autoComplete: "off",
				inputMode: "numeric",
				nullable: false,
			},
			...opts
		);
	};
}

function ip(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b",
				invalidMessage: "아이피를 확인하여 주십시오. (예: 0.0.0.0)",
				defaultValue: "",
				type: "text",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

function lowerSnakeCase(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "^[a-z0-9_]+$",
				invalidMessage: "입력값을 확인하여 주십시오. (예: lower_snake_case)",
				defaultValue: "",
				type: "text",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

function port(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "^[a-z0-9_]+$",
				invalidMessage: "포트를 확인하여 주십시오.",
				defaultValue: "",
				type: "number",
				autoComplete: "on",
				inputMode: "numeric",
				nullable: false,
			},
			...opts
		);
	};
}

function string(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "",
				invalidMessage: "",
				defaultValue: "",
				type: "text",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

// todo decimal 관련 regexp 보완하기
function number(...opts: Partial<InputOption<number>>[]): FnInput<number> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "^[0-9]*$",
				invalidMessage: "",
				defaultValue: 0,
				type: "text",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

function boolean(...opts: Partial<InputOption<StringBool>>[]): FnInput<StringBool> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "^(true|false)$",
				invalidMessage: "",
				defaultValue: "false",
				type: "text",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

function objectId(...opts: Partial<InputOption<string>>[]): FnInput<string> {
	return (name) => {
		return mergeOpts(
			{
				name,
				regexp: "^[a-z0-9]{24}$",
				invalidMessage: "아이디를 확인하여 주십시오.",
				defaultValue: "",
				type: "text",
				autoComplete: "on",
				inputMode: "text",
				nullable: false,
			},
			...opts
		);
	};
}

function form<INPUT>(opts: FormArgs<INPUT>): FormHelper<INPUT> {
	const res: any = {};
	for (const name in opts) {
		if (!opts.hasOwnProperty(name)) throw new Error(`${errNotFoundInputHelper}: name=${name}`);
		res[name] = opts[name](name);
	}
	return res as FormHelper<INPUT>;
}

export default {
	username,
	password,
	ip,
	port,
	otp,
	string,
	number,
	objectId,
	boolean,
	lowerSnakeCase,
	form,
};
