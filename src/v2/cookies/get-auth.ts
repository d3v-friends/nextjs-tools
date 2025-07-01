"use server";
import {httpHeaderAuthorization} from "@root";
import {cookies} from "next/headers";

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
