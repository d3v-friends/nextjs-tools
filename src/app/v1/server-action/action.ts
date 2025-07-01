"use server";
import {fnServerAction, getLogger, sleep} from "@root";

import Form from "./form";

export default async function (_: any, data: FormData) {
	return fnServerAction.parser(data, Form, async ({username, numb}) => {
		const logger = await getLogger();
		await sleep(1000);

		logger.info("username", username);
		logger.info("number", numb);

		if (username === "error") {
			throw new Error("error");
		}

		return {
			message: true,
		};
	});
}
