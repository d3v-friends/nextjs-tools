"use server";
import {fn, fnServerAction} from "@root";
import {fnLogger} from "@root/logger";
import Form from "./form";

export default async function (_: any, data: FormData) {
	return fnServerAction.parser(data, Form, async ({username, numb}) => {
		await fn.sleep(1000);
		fnLogger.Info("username", username);
		fnLogger.Info("number", numb);

		if (username === "error") {
			throw new Error("error");
		}

		return {
			message: true,
		};
	});
}
