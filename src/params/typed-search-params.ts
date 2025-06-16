import {NextPageSearchParams} from "@root";

type Params<P> = {
	[K in keyof P]: (str: string) => (str: string) => P[K];
};

export default async function <P>(params: Promise<NextPageSearchParams>, form: Params<P>): Promise<P> {
	const p = await params;
	const res: any = {};
	for (let key in form) {
		if (!p.hasOwnProperty(key)) {
			res[key] = form[key]("");
			continue;
		}
		res[key] = form[key](p[key] || "");
	}

	return res as P;
}
