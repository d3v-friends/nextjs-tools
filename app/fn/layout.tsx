import {ReactNode} from "react";
import Link from "next/link";

interface Props {
	children: ReactNode;
}

export default async function ({children}: Readonly<Partial<Props>>) {
	return (
		<main className="max-w-[1440px] ml-auto mr-auto flex">
			<aside className="w-1/5">
				<Aside />
			</aside>
			<div className="w-4/5">{children}</div>
		</main>
	);
}

function Aside() {
	return (
		<div className="flex flex-col">
			<h1 className="text-xl">Function</h1>
			<Link href="/fn/logger">* logger</Link>
			<Link href="/fn/modal">* modal</Link>
			<Link href="/fn/server-action">* server-action</Link>
			<Link href="/fn/server-form">* server-form</Link>
			<Link href="/fn/server-function">* server-function</Link>
		</div>
	);
}
