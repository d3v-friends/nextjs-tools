"use server";
import {
	contentTypeApplicationJson,
	httpHeaderAuthorization,
	httpHeaderContentType,
	httpHeaderUserAgent,
	httpXForwardedHost,
} from "@root/v2";
import {cookies, headers} from "next/headers";

async function getAuthorization(): Promise<string> {
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

async function setAuthorization(auth: string): Promise<void> {
	const c = await cookies();
	c.set(httpHeaderAuthorization, auth, {
		httpOnly: true,
		secure: process.env.NODE_ENV != "development",
		sameSite: "strict",
	});
}

async function clearAuthorization(): Promise<void> {
	const c = await cookies();
	c.delete(httpHeaderAuthorization);
}

async function createHeaders(header?: Record<string, string>): Promise<Record<string, string>> {
	header = header || {};
	header[httpHeaderContentType] = contentTypeApplicationJson;

	const h = await headers();
	header[httpHeaderUserAgent] = h.get(httpHeaderUserAgent) || "";
	header[httpXForwardedHost] = h.get(httpXForwardedHost) || "";
	header[httpHeaderAuthorization] = await getAuthorization();
	return header;
}

export default {
	getAuthorization,
	setAuthorization,
	createHeaders,
	clearAuthorization,
};
