"use server";
import {sampleForm} from "@app/form";
import {fnAction} from "src/index";

export default async function (_: any, form: FormData) {
	return fnAction.new(form, sampleForm, async ({username, password, boolean, objectId}) => {
		console.log("server", username, password, boolean, objectId);
		return {};
	});
}
