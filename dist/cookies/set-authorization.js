"use server";
import { cookies } from "next/headers";
import { httpHeaderAuthorization } from "./types";
export default async function (auth) {
    const c = await cookies();
    c.set(httpHeaderAuthorization, auth, {
        httpOnly: true,
        secure: process.env.NODE_ENV != "development",
        sameSite: "strict",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuYy9jb29raWVzL3NldC1hdXRob3JpemF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDckMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRWhELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLElBQVk7SUFDMUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksRUFBRTtRQUNwQyxRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhO1FBQzdDLFFBQVEsRUFBRSxRQUFRO0tBQ2xCLENBQUMsQ0FBQztBQUNKLENBQUMifQ==