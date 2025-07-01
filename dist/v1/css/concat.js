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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3YxL2Nzcy9jb25jYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE9BQU8sV0FBVyxHQUFHLElBQWtDO0lBQzdELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1YsU0FBUztRQUNWLENBQUM7UUFFRCxRQUFRLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDcEIsS0FBSyxRQUFRO2dCQUNaLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDOUIsTUFBTTtZQUNQLEtBQUssU0FBUztnQkFDYixNQUFNO1FBQ1IsQ0FBQztJQUNGLENBQUM7SUFDRCxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQyJ9