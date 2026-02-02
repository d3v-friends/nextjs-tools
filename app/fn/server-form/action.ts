"use server";
import Form from "./form";
import {unwrapForm, UnwrapForm} from "@src";

export default async function (args: UnwrapForm<typeof Form>) {
	await unwrapForm(Form, args);
	return args.username;
}
