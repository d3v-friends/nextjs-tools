"use server";
import {cookies} from "next/headers";
import {httpHeaderAuthorization} from "@func/cookies/types";

export default async function (): Promise<void> {
	const c = await cookies();
	c.delete(httpHeaderAuthorization);
}
