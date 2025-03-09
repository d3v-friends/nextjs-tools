import {fnEnv} from "@func";
import {PropsChildren} from "@type/react";
import {Viewport} from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function ({children}: Readonly<PropsChildren>) {
	return (
		<html lang={await fnEnv.server.string("HTML_LANG", "en")}>
			<body className={"font-12 lg:font-16"}>{children}</body>
		</html>
	);
}
