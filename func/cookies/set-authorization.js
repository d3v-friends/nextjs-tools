"use server";
import { cookies } from "next/headers";
import { httpHeaderAuthorization } from "func/cookies/types";
export default async function (auth) {
    const c = await cookies();
    c.set(httpHeaderAuthorization, auth, {
        httpOnly: true,
        secure: process.env.NODE_ENV != "development",
        sameSite: "strict",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXQtYXV0aG9yaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLElBQVk7SUFDMUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksRUFBRTtRQUNwQyxRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhO1FBQzdDLFFBQVEsRUFBRSxRQUFRO0tBQ2xCLENBQUMsQ0FBQztBQUNKLENBQUMifQ==