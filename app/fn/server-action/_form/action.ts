"use server";
import {serverFunction, sleep} from "@src";
import ServerActionForm from "./form";

export default async function (_: any, formData: FormData) {
	return serverFunction(formData, ServerActionForm, async ({username}) => {
		await sleep(1000);
		return {username};
	});
}
