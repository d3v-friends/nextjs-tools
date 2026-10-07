"use client";
import { useRouter } from "next/navigation";
class RouterTools {
    router;
    constructor(router) {
        this.router = router;
    }
    bfcacheId = "";
    experimental_gesturePush(href, options) {
        throw new Error("Method not implemented.");
    }
    pushBySearchParams(searchParams, host, options) {
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
        this.router.push(`${host}?${u.toString()}`, options);
    }
    push(href, options) {
        this.router.push(href, options);
    }
    refresh() {
        this.router.refresh();
    }
    back() {
        this.router.back();
    }
    forward() {
        this.router.forward();
    }
    replace(href, options) {
        this.router.replace(href, options);
    }
    prefetch(href, options) {
        return this.router.prefetch(href, options);
    }
}
export default function () {
    const router = useRouter();
    return new RouterTools(router);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXJvdXRlci10b29scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92My9yb3V0ZXIvdXNlLXJvdXRlci10b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFNYixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFMUMsTUFBTSxXQUFXO0lBQ1k7SUFBNUIsWUFBNEIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBRyxDQUFDO0lBRXpELFNBQVMsR0FBVyxFQUFFLENBQUM7SUFFdkIsd0JBQXdCLENBQUUsSUFBWSxFQUFFLE9BQXlCO1FBQ2hFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsa0JBQWtCLENBQ2pCLFlBQTZGLEVBQzdGLElBQWEsRUFDYixPQUF5QjtRQUV6QixNQUFNLENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELEtBQUssTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDaEMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxTQUFTO2dCQUNWLENBQUM7Z0JBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO2dCQUVELFFBQVEsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDbEMsS0FBSyxRQUFRO3dCQUNaLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNO29CQUNQLEtBQUssUUFBUTt3QkFDWixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsTUFBTTtvQkFDUDt3QkFDQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO1lBQ0YsQ0FBQztpQkFBTSxDQUFDO2dCQUNQLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDO1FBQ0YsQ0FBQztRQUVELElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsT0FBeUI7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSTtRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU87UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWSxFQUFFLE9BQXlCO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxPQUF5QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQUMsT0FBTztJQUNiLE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzNCLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyJ9