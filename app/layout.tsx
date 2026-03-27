import {Viewport} from "next";
import {GFetchPromiseChaining, NextLayoutProps} from "@src";
import Link from "next/link";
import "./index.scss";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function ({children}: NextLayoutProps) {
	return (
		<html lang="ko">
			<body>
				<GFetchPromiseChaining />
				<nav className="sticky top-0 left-0 w-full h-15 shadow-2xl shadow-[rgba(0,0,0,0.1)]">
					<Nav />
				</nav>
				<div className="h-5" />
				{children}
			</body>
		</html>
	);
}

function Nav() {
	return (
		<div className="max-w-[1440px] ml-auto mr-auto flex items-center h-full">
			<Link href="/">HOME</Link>
			<Link
				href="/fn/logger"
				className="ml-2">
				Fn
			</Link>
			<Link
				href="/hook/use-pending"
				className="ml-2">
				Hook
			</Link>
		</div>
	);
}
