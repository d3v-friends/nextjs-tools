"use server";
import {headers} from "next/headers";
import getAuthorization from "@func/cookies/get-authorization";
import {
	contentTypeApplicationJson,
	httpHeaderAuthorization,
	httpHeaderContentType,
	httpHeaderUserAgent,
	httpXForwardedHost,
} from "src/func/cookies/types";

export default async function (header?: Record<string, string>): Promise<Record<string, string>> {
	header = header || {};
	header[httpHeaderContentType] = contentTypeApplicationJson;

	const h = await headers();
	header[httpHeaderUserAgent] = h.get(httpHeaderUserAgent) || "";
	header[httpXForwardedHost] = h.get(httpXForwardedHost) || "";
	header[httpHeaderAuthorization] = await getAuthorization();
	return header;
}
