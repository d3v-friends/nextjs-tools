import {fnRegexp} from "@v2/index";

const fnParser = {
	number: (v: unknown, initValue = 0): number => {
		// null이나 undefined인 경우
		if (v == null) return initValue;

		// 숫자인 경우 바로 반환
		if (typeof v === "number" && !Number.isNaN(v)) return v;

		// 문자열인 경우 처리
		if (typeof v === "string") {
			// 문자열이 비어있는 경우
			if (v.trim() === "") return initValue;

			const parsed = parseFloat(v);
			return Number.isNaN(parsed) ? initValue : parsed;
		}

		// boolean 값 처리
		if (typeof v === "boolean") {
			return v ? 1 : 0;
		}

		// 그 외의 모든 경우
		const converted = Number(v);
		return Number.isNaN(converted) ? initValue : converted;
	},
	isNumber: (v: unknown): boolean => {
		// null이나 undefined인 경우
		if (v == null) return false;

		// 숫자인 경우 바로 반환
		if (typeof v === "number" && !Number.isNaN(v)) return true;

		// 문자열인 경우 처리
		if (typeof v === "string") {
			// 문자열이 비어있는 경우
			if (v.trim() === "") return false;

			const parsed = parseFloat(v);
			return !Number.isNaN(parsed);
		}

		// boolean 값 처리
		if (typeof v === "boolean") {
			return false;
		}

		// 그 외의 모든 경우
		const converted = Number(v);
		return !Number.isNaN(converted);
	},
	naturalNumber: (v: unknown, initValue = 0): number => {
		// 먼저 number로 변환
		const num = fnParser.number(v, initValue);

		// 0보다 작거나 같은 경우 initValue 반환
		if (num <= 0) return initValue;

		// 정수가 아닌 경우 initValue 반환
		if (!Number.isInteger(num)) return initValue;

		return num;
	},
	integer: (v: unknown, initValue = 0): number => {
		// 먼저 number로 변환
		const num = fnParser.number(v, initValue);

		// 정수가 아닌 경우 initValue 반환
		if (!Number.isInteger(num)) return initValue;

		return num;
	},
	boolean: (v: unknown, initValue = false): boolean => {
		if (v == null) return initValue;
		if (typeof v === "boolean") return v;
		if (typeof v === "string") {
			if (v.trim() === "") return initValue;
			return v.toLowerCase() === "true";
		}
		return initValue;
	},
	objectId: (v: unknown, initValue = "000000000000000000000000"): string => {
		if (v == null) return initValue;
		if (typeof v === "string") {
			if (v.trim() === "") return initValue;
			const str = v.toLowerCase();
			return new RegExp(fnRegexp.objectId).test(str) ? str : initValue;
		}
		return initValue;
	},
};

export default fnParser;
