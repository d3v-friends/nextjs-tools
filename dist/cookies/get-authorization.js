"use server";
import { httpHeaderAuthorization } from "../cookies/types";
import { cookies } from "next/headers";
export default async function () {
    const c = await cookies();
    const auth = c.get(httpHeaderAuthorization);
    if (!auth) {
        return "";
    }
    if (!auth.value) {
        return "";
    }
    return auth.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuYy9jb29raWVzL2dldC1hdXRob3JpemF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO0lBQ25CLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDMUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBRTVDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ25CLENBQUMifQ==