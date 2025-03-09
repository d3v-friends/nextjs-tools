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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmMvY3NzL2NvbmNhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsT0FBTyxXQUFXLEdBQUcsSUFBa0M7SUFDN0QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDVixTQUFTO1FBQ1YsQ0FBQztRQUVELFFBQVEsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLFFBQVE7Z0JBQ1osR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUM5QixNQUFNO1lBQ1AsS0FBSyxTQUFTO2dCQUNiLE1BQU07UUFDUixDQUFDO0lBQ0YsQ0FBQztJQUNELEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDIn0=