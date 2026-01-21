import {Viewport} from "next";
import {NextLayoutProps} from "@src";
import Link from "next/link";
import {ReactNode} from "react";
import "./index.scss";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function ({children}: NextLayoutProps) {
	return (
		<html lang="ko">
			<body>
				<nav className="sticky top-0 left-0 w-full h-15 shadow-2xl shadow-[rgba(0,0,0,0.1)]">
					<Nav />
				</nav>
				<div className="h-5" />
				<main className="max-w-[1440px] ml-auto mr-auto flex">
					<aside className="w-1/5">
						<Aside />
					</aside>
					<section className="w-4/5">{children}</section>
				</main>
			</body>
		</html>
	);
}

interface AsideProps {
	children?: ReactNode;
}

function Aside({}: Readonly<AsideProps>) {
	return (
		<div className="flex flex-col">
			<h1 className="text-xl">Function</h1>
			<Link href="/fn/logger">* logger</Link>
		</div>
	);
}

interface NavProps {
	children?: ReactNode;
}

function Nav({}: Readonly<NavProps>) {
	return (
		<div className="max-w-[1440px] ml-auto mr-auto flex items-center h-full">
			<Link href="/">HOME</Link>
		</div>
	);
}
