"use client";
import { useRouter } from "next/navigation";
class RouterTools {
    router;
    constructor(router) {
        this.router = router;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXJvdXRlci10b29scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92Mi9yb3V0ZXIvdXNlLXJvdXRlci10b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFNYixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFMUMsTUFBTSxXQUFXO0lBQ1k7SUFBNUIsWUFBNEIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBRyxDQUFDO0lBRXpELGtCQUFrQixDQUNqQixZQUE2RixFQUM3RixJQUFhLEVBQ2IsT0FBeUI7UUFFekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxLQUFLLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2hDLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO29CQUN2QyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDNUMsU0FBUztnQkFDVixDQUFDO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUN0QyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEUsQ0FBQztnQkFFRCxRQUFRLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ2xDLEtBQUssUUFBUTt3QkFDWixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsTUFBTTtvQkFDUCxLQUFLLFFBQVE7d0JBQ1osQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE1BQU07b0JBQ1A7d0JBQ0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztZQUNGLENBQUM7aUJBQU0sQ0FBQztnQkFDUCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQztRQUNGLENBQUM7UUFFRCxJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFJLENBQUMsSUFBWSxFQUFFLE9BQXlCO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVksRUFBRSxPQUF5QjtRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZLEVBQUUsT0FBeUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNEO0FBRUQsTUFBTSxDQUFDLE9BQU87SUFDYixNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMzQixPQUFPLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMifQ==