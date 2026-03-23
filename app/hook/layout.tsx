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
			<Link href="/hook/use-pending">* use-pending</Link>
		</div>
	);
}
