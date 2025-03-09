export default function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = "";
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!arg) {
            continue;
        }
        switch (typeof arg) {
            case "string":
                res = "".concat(res, " ").concat(String(arg));
                break;
            case "boolean":
                break;
        }
    }
    res = res.replaceAll("  ", " ");
    return res.slice(1, res.length);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmMvY3NzL2NvbmNhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsT0FBTztJQUFXLGNBQXFDO1NBQXJDLFVBQXFDLEVBQXJDLHFCQUFxQyxFQUFyQyxJQUFxQztRQUFyQyx5QkFBcUM7O0lBQzdELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQWtCLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUUsQ0FBQztRQUFwQixJQUFNLEdBQUcsYUFBQTtRQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNWLFNBQVM7UUFDVixDQUFDO1FBRUQsUUFBUSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssUUFBUTtnQkFDWixHQUFHLEdBQUcsVUFBRyxHQUFHLGNBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7Z0JBQzlCLE1BQU07WUFDUCxLQUFLLFNBQVM7Z0JBQ2IsTUFBTTtRQUNSLENBQUM7SUFDRixDQUFDO0lBQ0QsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUMifQ==