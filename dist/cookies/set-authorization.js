"use server";
import { cookies } from "next/headers";
import { httpHeaderAuthorization } from "./types.js";
export default async function (auth) {
    const c = await cookies();
    c.set(httpHeaderAuthorization, auth, {
        httpOnly: true,
        secure: process.env.NODE_ENV != "development",
        sameSite: "strict",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29va2llcy9zZXQtYXV0aG9yaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVoRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxJQUFZO0lBQzFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLEVBQUU7UUFDcEMsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYTtRQUM3QyxRQUFRLEVBQUUsUUFBUTtLQUNsQixDQUFDLENBQUM7QUFDSixDQUFDIn0=