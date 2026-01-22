"use server";
import {FormType, ServerActionHandler, ServerActionState} from "./types";
import getLogger from "../logger/get-logger";
import formParser from "./form-parser";

export default async function <I extends object, R>(
	form: FormData,
	desc: FormType<I>,
	handler: ServerActionHandler<I, R>
): Promise<ServerActionState<I, R>> {
	const logger = await getLogger();

	try {
		const i = getValue(form, desc);
		const res = await handler(i);
		logger.info({
			action: "SERVER_ACTION",
			input: i,
			response: res,
		});

		return {
			time: new Date().getTime(),
			response: res,
			input: i,
		};
	} catch (e) {
		let message = e instanceof Error ? e.message : JSON.stringify(e);

		logger.error({
			action: "SERVER_ACTION",
			error: message,
		});

		return {
			time: new Date().getTime(),
			response: null as R,
			input: null as unknown as I,
			error: message,
		};
	}
}

// formData 에서 미리 선언한 데이터형으로 변환하는 함수
function getValue<I extends object>(form: FormData, desc: FormType<I>): I {
	const res: any = {};

	for (const key in desc) {
		const field = desc[key];
		const value = formParser.string(form, key);
		res[key] = field.parser(value);
	}

	return res as I;
}
