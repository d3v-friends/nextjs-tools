import {FormType, Input, InputParser, InputProperty} from "./types";
import {DateTime} from "luxon";
import regexp from "../regexp";
import {DatePeriod, Nullable} from "../../types";

function isInvalid(str: RegExp | string, value: string, message: string) {
	if (new RegExp(str).test(value)) {
		return;
	}
	throw new Error(`${message}: value=${value}`);
}

function isNull(str: Nullable<string>, message: string): string {
	if (!str) {
		throw new Error(`${message}`);
	}
	return str;
}

/* ---------------------------------------------------------------------------------------------------- */

function field<T>(parser: InputParser<T>, validate: (v: T) => boolean, i: InputProperty = {}): Input<T> {
	return {
		...i,
		validate,
		parser,
	};
}

function create<I extends object>(form: FormType<I>): FormType<I> {
	for (const name in form) {
		form[name].name = name;
	}
	return form;
}

/* ---------------------------------------------------------------------------------------------------- */

function string(i: InputProperty = {}): Input<string> {
	return {
		parser: (str) => {
			str = isNull(str, "no_string");
			return str;
		},
		validate: (_) => true,
		...i,
	};
}

function nullableString(i: InputProperty = {}): Input<Nullable<string>> {
	return {
		parser: (str) => {
			if (str === null) return null;
			return str;
		},
		validate: (_) => true,
		...i,
	};
}

function boolean(i: InputProperty = {}): Input<boolean> {
	return {
		regexp: regexp.boolean,
		parser: (str) => {
			str = isNull(str, "no_boolean");
			return str === "true";
		},
		validate: (_) => true,
		...i,
	};
}

function nullableBoolean(i: InputProperty = {}): Input<Nullable<boolean>> {
	return {
		regexp: regexp.boolean,
		parser: (str) => {
			if (str === null) return null;
			return str === "true";
		},
		validate: (_) => true,
		...i,
	};
}

function username(i: InputProperty = {}): Input<string> {
	return {
		regexp: regexp.username,
		invalidMessage: "영문 소문자로 시작하고 4자리 이상 20자리 이하로 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_username");
			isInvalid(regexp.username, str, "invalid_username");
			return str;
		},
		validate: (str) => new RegExp(regexp.username).test(str),
		...i,
	};
}

function nullableUsername(i: InputProperty = {}): Input<Nullable<string>> {
	return {
		regexp: regexp.username,
		invalidMessage: "영문 소문자로 시작하고 4자리 이상 20자리 이하로 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.username, str, "invalid_username");
			return str;
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.username).test(i);
		},
		...i,
	};
}

function password(i: InputProperty = {}): Input<string> {
	return {
		regexp: regexp.password,
		invalidMessage: "영문, 숫자, 특수문자를 사용하여 8자리 이상 20자리 미만 비밀번호를 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_password");
			isInvalid(regexp.password, str, "invalid_password");
			return str;
		},
		validate: (i) => new RegExp(regexp.password).test(i),
		...i,
	};
}

function nullablePassword(i: InputProperty = {}): Input<Nullable<string>> {
	return {
		regexp: regexp.password,
		invalidMessage: "영문, 숫자, 특수문자를 사용하여 8자리 이상 20자리 미만 비밀번호를 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.password, str, "invalid_password");
			return str;
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.password).test(i);
		},
		...i,
	};
}

function otp(i: InputProperty = {}): Input<string> {
	return {
		regexp: regexp.otp,
		parser: (str) => {
			str = isNull(str, "no_otp");
			isInvalid(regexp.otp, str, "invalid_otp");
			return str;
		},
		validate: (i) => new RegExp(regexp.otp).test(i || ""),
		...i,
	};
}

function nullableOtp(i: InputProperty = {}): Input<Nullable<string>> {
	return {
		regexp: regexp.otp,
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.otp, str, "invalid_otp");
			return str;
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.otp).test(i);
		},
		...i,
	};
}

function rfc3339time(i: InputProperty = {}): Input<Date> {
	return {
		regexp: regexp.rfc3339Time,
		invalidMessage: "2000-01-01T00:00:00Z 형식으로 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_rfc3339time");
			const date = DateTime.fromISO(str);
			return date.toJSDate();
		},
		validate: (_) => true,
		...i,
	};
}

function nullableRfc3339time(i: InputProperty = {}): Input<Nullable<Date>> {
	return {
		regexp: regexp.rfc3339Time,
		invalidMessage: "2000-01-01T00:00:00Z 형식으로 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			const date = DateTime.fromISO(str);
			return date.toJSDate();
		},
		validate: (_) => true,
		...i,
	};
}

function objectId(i: InputProperty = {}): Input<string> {
	return {
		regexp: regexp.objectId,
		invalidMessage: "영문소문자, 숫자를 포함한 24자리 문자열을 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_object_id");
			isInvalid(regexp.objectId, str, "invalid_object_id");
			return str;
		},
		validate: (i) => new RegExp(regexp.objectId).test(i),
		...i,
	};
}

function nullableObjectId(i: InputProperty = {}): Input<Nullable<string>> {
	return {
		regexp: regexp.objectId,
		invalidMessage: "영문소문자, 숫자를 포함한 24자리 문자열을 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.objectId, str, "invalid_object_id");
			return str;
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.objectId).test(i);
		},
		...i,
	};
}

function decimal(i: InputProperty = {}): Input<string> {
	return {
		regexp: regexp.decimal,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_decimal");
			isInvalid(regexp.decimal, str, "invalid_decimal");
			return str;
		},
		validate: (i) => new RegExp(regexp.decimal).test(i),
		...i,
	};
}

function nullableDecimal(i: InputProperty = {}): Input<Nullable<string>> {
	return {
		regexp: regexp.decimal,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.decimal, str, "invalid_decimal");
			return str;
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.decimal).test(i);
		},
		...i,
	};
}

function integer(i: InputProperty = {}): Input<number> {
	return {
		regexp: regexp.integer,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_integer");
			isInvalid(regexp.integer, str, "invalid_integer");
			return parseInt(str);
		},
		validate: (i) => new RegExp(regexp.integer).test(i.toString()),
		...i,
	};
}

function nullableInteger(i: InputProperty = {}): Input<Nullable<number>> {
	return {
		regexp: regexp.integer,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.integer, str, "invalid_integer");
			return parseInt(str);
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.integer).test(i.toString());
		},
		...i,
	};
}

function naturalNumber(i: InputProperty = {}): Input<number> {
	return {
		regexp: regexp.naturalNumber,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_natural_number");
			isInvalid(regexp.naturalNumber, str, "invalid_natural_number");
			return parseInt(str);
		},
		validate: (i) => {
			return new RegExp(regexp.naturalNumber).test(i.toString());
		},
		...i,
	};
}

function nullableNaturalNumber(i: InputProperty = {}): Input<Nullable<number>> {
	return {
		regexp: regexp.naturalNumber,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.naturalNumber, str, "invalid_natural_number");
			return parseInt(str);
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.naturalNumber).test(i.toString());
		},
		...i,
	};
}

function negativeNumber(i: InputProperty = {}): Input<number> {
	return {
		regexp: regexp.negativeNumber,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			str = isNull(str, "no_negative_number");
			isInvalid(regexp.negativeNumber, str, "invalid_negative_number");
			return parseInt(str);
		},
		validate: (i) => {
			return new RegExp(regexp.negativeNumber).test(i.toString());
		},
		...i,
	};
}

function nullableNegativeNumber(i: InputProperty = {}): Input<Nullable<number>> {
	return {
		regexp: regexp.negativeNumber,
		invalidMessage: "숫자만 입력하여 주십시오.",
		parser: (str) => {
			if (str === null) return null;
			isInvalid(regexp.negativeNumber, str, "invalid_negative_number");
			return parseInt(str);
		},
		validate: (i) => {
			if (!i) return true;
			return new RegExp(regexp.negativeNumber).test(i.toString());
		},
		...i,
	};
}

function datePeriod(i: InputProperty = {}): Input<DatePeriod> {
	return {
		parser: (str) => {
			const res: DatePeriod = {};
			if (str === null) return res;

			const ls = str.split(",");
			switch (ls.length) {
				case 1:
					isInvalid(regexp.rfc3339Time, ls[0], "invalid_date_period_from");
					res.from = DateTime.fromISO(ls[0]).toUTC().toJSDate();
					break;
				case 2:
					isInvalid(regexp.rfc3339Time, ls[0], "invalid_date_period_from");
					isInvalid(regexp.rfc3339Time, ls[1], "invalid_date_period_to");
					res.from = DateTime.fromISO(ls[0]).toUTC().toJSDate();
					res.to = DateTime.fromISO(ls[1]).toUTC().toJSDate();
					break;
			}

			return res;
		},
		validate: (_) => true,
		...i,
	};
}

export default {
	create,
	string,
	nullableString,
	boolean,
	nullableBoolean,
	username,
	nullableUsername,
	password,
	nullablePassword,
	otp,
	nullableOtp,
	rfc3339time,
	nullableRfc3339time,
	objectId,
	nullableObjectId,
	integer,
	nullableInteger,
	decimal,
	nullableDecimal,
	naturalNumber,
	nullableNaturalNumber,
	negativeNumber,
	nullableNegativeNumber,
	field,
	datePeriod,
};
