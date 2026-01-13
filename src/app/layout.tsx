import {Viewport} from "next";
import {NextLayoutProps} from "@root";
import "./index.scss";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function ({children}: NextLayoutProps) {
	return (
		<html lang="ko">
			<body className={"font-12 lg:font-16"}>{children}</body>
		</html>
	);
}
