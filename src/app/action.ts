"use server";
import {sampleForm} from "@app/form";
import {fnAction} from "index";

export default async (_: any, form: FormData) =>
	fnAction.new(form, sampleForm, async ({username, password, boolean}) => {
		console.log("server", username, password, boolean);
		return {};
	});
