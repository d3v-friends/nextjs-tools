export default function merge(origin, partial) {
    const res = Object.assign({}, origin);
    for (let key in origin) {
        switch (typeof origin[key]) {
            case "object":
                if (partial.hasOwnProperty(key))
                    res[key] = merge(res[key], partial[key]);
                break;
            default:
                if (partial.hasOwnProperty(key))
                    res[key] = partial[key];
        }
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxVQUFVLEtBQUssQ0FBYSxNQUFTLEVBQUUsT0FBbUI7SUFDdkUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUN4QixRQUFRLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDNUIsS0FBSyxRQUFRO2dCQUNaLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7b0JBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUcsT0FBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLE1BQU07WUFDUDtnQkFDQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO29CQUFHLEdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEUsQ0FBQztJQUNGLENBQUM7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUMifQ==