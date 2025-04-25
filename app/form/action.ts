"use server";
import {fn, fnServerAction} from "@root";
import {Logger} from "@root/logger";
import Form from "./form";

export default async function (_: any, data: FormData) {
	return fnServerAction.parser(data, Form, async ({username, numb}) => {
		await fn.sleep(1000);
		Logger.Info("username", username);
		Logger.Info("number", numb);

		if (username === "error") {
			throw new Error("error");
		}

		return {
			message: true,
		};
	});
}
