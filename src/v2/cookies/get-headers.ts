"use server";
import {
	contentTypeApplicationJson,
	getAuth,
	httpHeaderAuthorization,
	httpHeaderContentType,
	httpHeaderUserAgent,
	httpXForwardedHost,
} from "@root";
import {headers} from "next/headers";

export default async function (header?: Record<string, string>): Promise<Record<string, string>> {
	const h = await headers();

	header = header || {};
	header[httpHeaderContentType] = contentTypeApplicationJson;
	header[httpHeaderUserAgent] = h.get(httpHeaderUserAgent) || "";
	header[httpXForwardedHost] = h.get(httpXForwardedHost) || "";
	header[httpHeaderAuthorization] = await getAuth();
	return header;
}
