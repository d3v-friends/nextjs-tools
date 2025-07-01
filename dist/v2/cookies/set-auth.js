"use server";
import { httpHeaderAuthorization } from "../../index.js";
import { cookies } from "next/headers";
export default async function (auth) {
    const c = await cookies();
    c.set(httpHeaderAuthorization, auth, {
        httpOnly: true,
        secure: process.env.NODE_ENV != "development",
        sameSite: "strict",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWF1dGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjIvY29va2llcy9zZXQtYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDOUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxJQUFZO0lBQzFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLEVBQUU7UUFDcEMsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYTtRQUM3QyxRQUFRLEVBQUUsUUFBUTtLQUNsQixDQUFDLENBQUM7QUFDSixDQUFDIn0=