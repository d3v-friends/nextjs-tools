import {Nullable} from "../..";
import merge from "./merge";

const fnReflect = {
	merge,
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
	numberNull: (v: unknown): Nullable<number> => {
		if (v == null) return null;

		if (typeof v === "number") {
			return Number.isFinite(v) ? v : null;
		}

		if (typeof v === "string") {
			if (v.trim() === "") return null;

			const parsed = parseFloat(v);
			return Number.isFinite(parsed) ? parsed : null;
		}

		if (typeof v === "boolean") {
			return v ? 1 : 0;
		}

		const converted = Number(v);
		return Number.isFinite(converted) ? converted : null;
	},
};

export default fnReflect;
