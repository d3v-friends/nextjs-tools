"use server";
import {Client} from "./client";
import {Header} from "./types";

interface Args {
	host?: string;
	hostEnvKey?: string;
	header?: Header;
}

export default async function (args: Args): Promise<Client> {
	if (args.host) {
		return new Client(args.host, args.header);
	} else if (args.hostEnvKey) {
		const host = process.env[args.hostEnvKey] || "";

		if (!host) throw new Error("not_found_host");

		return new Client(host, args.header);
	}

	throw new Error("not_found_host");
}
