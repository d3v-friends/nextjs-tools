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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFJYixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FDbkIsTUFBcUMsRUFDckMsVUFBYTtJQUViLE1BQU0sQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDO0lBQ3ZCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztJQUNwQixLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixTQUFTO1FBQ1YsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLFNBQVM7UUFDVixDQUFDO1FBRUQsUUFBUSxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssUUFBUTtnQkFDWixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE1BQU07WUFDUCxLQUFLLFFBQVE7Z0JBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsTUFBTTtZQUNQLEtBQUssV0FBVztnQkFDZixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNO1lBQ1A7Z0JBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsTUFBTTtRQUNSLENBQUM7SUFDRixDQUFDO0lBRUQsT0FBTyxHQUFRLENBQUM7QUFDakIsQ0FBQyJ9