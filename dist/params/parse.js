"use server";
export default async function (params, initParams) {
    const p = await params;
    const res = {};
    for (const key in initParams) {
        if (!p.hasOwnProperty(key)) {
            res[key] = initParams[key];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFyYW1zL3BhcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUliLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUNuQixNQUFxQyxFQUNyQyxVQUFhO0lBRWIsTUFBTSxDQUFDLEdBQUcsTUFBTSxNQUFNLENBQUM7SUFDdkIsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLEtBQUssTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLFNBQVM7UUFDVixDQUFDO1FBRUQsUUFBUSxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssUUFBUTtnQkFDWixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE1BQU07WUFDUCxLQUFLLFFBQVE7Z0JBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsTUFBTTtZQUNQLEtBQUssV0FBVztnQkFDZixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNO1lBQ1A7Z0JBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsTUFBTTtRQUNSLENBQUM7SUFDRixDQUFDO0lBRUQsT0FBTyxHQUFRLENBQUM7QUFDakIsQ0FBQyJ9