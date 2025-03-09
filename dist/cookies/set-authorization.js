"use server";
import { httpHeaderAuthorization } from "@func/cookies/types";
import { cookies } from "next/headers";
export default async function (auth) {
    const c = await cookies();
    c.set(httpHeaderAuthorization, auth, {
        httpOnly: true,
        secure: process.env.NODE_ENV != "development",
        sameSite: "strict",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuYy9jb29raWVzL3NldC1hdXRob3JpemF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsSUFBWTtJQUMxQyxNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxFQUFFO1FBQ3BDLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWE7UUFDN0MsUUFBUSxFQUFFLFFBQVE7S0FDbEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9