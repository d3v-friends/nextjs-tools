export default function (value: number | string): string {
	const number = typeof value === "string" ? parseFloat(value) : value;
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
