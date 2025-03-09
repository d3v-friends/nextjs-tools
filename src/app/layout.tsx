import {Viewport} from "next";
import {ReactNode} from "react";
import {fnEnv} from "../func";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function ({children}: Readonly<{children?: ReactNode}>) {
	return (
		<html lang={await fnEnv.server.string("HTML_LANG", "en")}>
			<body className={"font-12 lg:font-16"}>{children}</body>
		</html>
	);
}
