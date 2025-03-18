import concat from "@func/css/concat";
import trim from "@func/css/trim";

export default function (...str: string[]): string {
	let res = concat(...str);
	return trim(res);
}
