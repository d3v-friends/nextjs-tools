export default function (...args) {
    let res = "";
    for (const arg of args) {
        if (!arg) {
            continue;
        }
        switch (typeof arg) {
            case "string":
                res = `${res} ${String(arg)}`;
                break;
            case "boolean":
                break;
        }
    }
    res = res.replaceAll("  ", " ");
    return res.slice(1, res.length);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uY2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxPQUFPLFdBQVcsR0FBRyxJQUFrQztJQUM3RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNWLFNBQVM7UUFDVixDQUFDO1FBRUQsUUFBUSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssUUFBUTtnQkFDWixHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE1BQU07WUFDUCxLQUFLLFNBQVM7Z0JBQ2IsTUFBTTtRQUNSLENBQUM7SUFDRixDQUFDO0lBQ0QsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUMifQ==