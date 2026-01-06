"use server";
import {cookies} from "next/headers";
import {httpHeaderAuthorization} from "../..";

export default async function (): Promise<string> {
	const c = await cookies();
	const auth = c.get(httpHeaderAuthorization);

	if (!auth) {
		return "";
	}

	if (!auth.value) {
		return "";
	}

	return auth.value;
}
