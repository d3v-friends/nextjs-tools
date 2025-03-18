export default function (str: string): string {
	str = str.replaceAll("\n", " ");
	str = str.replaceAll("\t", " ");
	str = str.replaceAll("  ", " ");
	return str;
}
