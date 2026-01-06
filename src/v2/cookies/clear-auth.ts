"use server";
import {cookies} from "next/headers";
import {httpHeaderAuthorization} from "../..";

export default async function (): Promise<void> {
	const c = await cookies();
	c.delete(httpHeaderAuthorization);
}
