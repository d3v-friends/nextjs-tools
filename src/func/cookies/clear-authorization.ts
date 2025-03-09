"use server";
import {httpHeaderAuthorization} from "@func/cookies/types";
import {cookies} from "next/headers";

export default async function (): Promise<void> {
	const c = await cookies();
	c.delete(httpHeaderAuthorization);
}
