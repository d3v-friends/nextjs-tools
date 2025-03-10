"use server";
import { headers } from "next/headers";
import getAuthorization from "./get-authorization";
import { contentTypeApplicationJson, httpHeaderAuthorization, httpHeaderContentType, httpHeaderUserAgent, httpXForwardedHost, } from "./types";
export default async function (header) {
    header = header || {};
    header[httpHeaderContentType] = contentTypeApplicationJson;
    const h = await headers();
    header[httpHeaderUserAgent] = h.get(httpHeaderUserAgent) || "";
    header[httpXForwardedHost] = h.get(httpXForwardedHost) || "";
    header[httpHeaderAuthorization] = await getAuthorization();
    return header;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLGdCQUFnQixNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFDTiwwQkFBMEIsRUFDMUIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsa0JBQWtCLEdBQ2xCLE1BQU0sU0FBUyxDQUFDO0FBRWpCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLE1BQStCO0lBQzdELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDO0lBRTNELE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDMUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztJQUMzRCxPQUFPLE1BQU0sQ0FBQztBQUNmLENBQUMifQ==