export default function (str: string): string {
	str = str.replaceAll("\n", " ");
	str = str.replaceAll("\t", " ");
	while (str.includes("  ")) {
		str = str.replaceAll("  ", " ");
	}
	return str.trim();
}
