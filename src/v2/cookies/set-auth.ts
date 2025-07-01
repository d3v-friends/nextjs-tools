"use server";
import {httpHeaderAuthorization} from "@root";
import {cookies} from "next/headers";

export default async function (auth: string): Promise<void> {
	const c = await cookies();
	c.set(httpHeaderAuthorization, auth, {
		httpOnly: true,
		secure: process.env.NODE_ENV != "development",
		sameSite: "strict",
	});
}
