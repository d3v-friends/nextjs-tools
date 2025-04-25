"use server";
export default async function (params, initParams) {
    const p = await params;
    const res = {};
    for (const key in initParams) {
        if (!p.hasOwnProperty(key)) {
            res[key] = initParams[key];
            continue;
        }
        if (p[key] instanceof Array) {
            res[key] = p[key] || initParams[key];
            continue;
        }
        switch (typeof initParams[key]) {
            case "number":
                res[key] = Number.isNaN(p[key]) ? 0 : Number(p[key]);
                break;
            case "string":
                res[key] = p[key];
                break;
            case "undefined":
                res[key] = null;
                break;
            default:
                res[key] = initParams[key];
                break;
        }
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFyYW1zL3BhcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUliLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUNuQixNQUFxQyxFQUNyQyxVQUFhO0lBRWIsTUFBTSxDQUFDLEdBQUcsTUFBTSxNQUFNLENBQUM7SUFDdkIsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLEtBQUssTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLFNBQVM7UUFDVixDQUFDO1FBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUM7WUFDN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsU0FBUztRQUNWLENBQUM7UUFFRCxRQUFRLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEMsS0FBSyxRQUFRO2dCQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckQsTUFBTTtZQUNQLEtBQUssUUFBUTtnQkFDWixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixNQUFNO1lBQ1AsS0FBSyxXQUFXO2dCQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU07WUFDUDtnQkFDQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1FBQ1IsQ0FBQztJQUNGLENBQUM7SUFFRCxPQUFPLEdBQVEsQ0FBQztBQUNqQixDQUFDIn0=