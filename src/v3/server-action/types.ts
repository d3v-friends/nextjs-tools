import {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute} from "react";
import {Nullable} from "../../types";

type ResultType = "string" | "integer" | "decimal" | "strings" | "integers" | "decimals";

export type InputProperty = Partial<InputConvenience> & Partial<InputAttribute>;

type InputConvenience = {
	regexp: RegExp | string;
	resultType: ResultType;
	invalidMessage: string;
};

type InputAttribute = {
	name: string;
	disabled: boolean;
	required: boolean;
	placeholder: string;
	type: HTMLInputTypeAttribute;
	autoComplete: HTMLInputAutoCompleteAttribute;
};

export type InputParser<T> = (str: Nullable<string>) => T;

export type Input<T> = InputProperty & {
	parser: InputParser<T>;
	validate: (value: T) => boolean;
};

export type FormType<T extends object> = {
	[KEY in keyof T]: Input<T[KEY]>;
};

export type UnwrapForm<F> = {
	[K in keyof F]: F[K] extends Input<infer U> ? U : never;
};

// I = input parameter
// R = response
// server-action 에서 사용하는 데이터. 함수, 오브젝트등 사용하면 클라이언트 사이드로 전달이 안된다.
// stringify 되는 값만 전달 가능
export interface ServerActionState<I, R> {
	// 서버액션이 실행된 시간
	time: number;
	// 실행된 후 결과값
	response: R;
	// 입력값
	input: I;
	error?: string;
}

// I = input parameter
// R = response
export type ServerActionHandler<I, R> = (parameter: I) => Promise<R>;

export type ServerAction<I, R> = (_: any, form: FormData) => Promise<ServerActionState<I, R>>;
