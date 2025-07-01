"use client";
class RouterTools {
    router;
    constructor(router) {
        this.router = router;
    }
    push(router, searchParams, host) {
        const u = new URLSearchParams(window.location.search);
        for (const key in searchParams) {
            if (searchParams[key]) {
                if (searchParams[key] instanceof Date) {
                    u.set(key, searchParams[key].toISOString());
                    continue;
                }
                if (Array.isArray(searchParams[key])) {
                    u.set(key, searchParams[key].map((v) => String(v).trim()).join(","));
                }
                switch (typeof searchParams[key]) {
                    case "number":
                        u.set(key, String(searchParams[key]));
                        break;
                    case "string":
                        u.set(key, searchParams[key]);
                        break;
                    default:
                        u.delete(key);
                }
            }
            else {
                u.delete(key);
            }
        }
        host = host || window.location.pathname;
        router.push(`${host}?${u.toString()}`);
    }
}
export default function (router) {
    return new RouterTools(router);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXJvdXRlci10b29scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92Mi9yb3V0ZXIvdXNlLXJvdXRlci10b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFHYixNQUFNLFdBQVc7SUFDWTtJQUE1QixZQUE0QixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUFHLENBQUM7SUFFekQsSUFBSSxDQUNILE1BQXlCLEVBQ3pCLFlBQTZGLEVBQzdGLElBQWE7UUFFYixNQUFNLENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELEtBQUssTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDaEMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxTQUFTO2dCQUNWLENBQUM7Z0JBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO2dCQUVELFFBQVEsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDbEMsS0FBSyxRQUFRO3dCQUNaLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNO29CQUNQLEtBQUssUUFBUTt3QkFDWixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsTUFBTTtvQkFDUDt3QkFDQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO1lBQ0YsQ0FBQztpQkFBTSxDQUFDO2dCQUNQLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDO1FBQ0YsQ0FBQztRQUVELElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxPQUFPLFdBQVcsTUFBeUI7SUFDakQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDIn0=