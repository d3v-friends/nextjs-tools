"use server";
import { httpHeaderAuthorization } from "../../index.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWF1dGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjIvY29va2llcy9nZXQtYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDOUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7SUFDbkIsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUMxQixNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFNUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbkIsQ0FBQyJ9