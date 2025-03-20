"use server";
import getAuthorization from "../cookies/get-authorization";
import { contentTypeApplicationJson, httpHeaderAuthorization, httpHeaderContentType, httpHeaderUserAgent, httpXForwardedHost, } from "../cookies/types";
import { headers } from "next/headers";
export default async function (header) {
    header = header || {};
    header[httpHeaderContentType] = contentTypeApplicationJson;
    const h = await headers();
    header[httpHeaderUserAgent] = h.get(httpHeaderUserAgent) || "";
    header[httpXForwardedHost] = h.get(httpXForwardedHost) || "";
    header[httpHeaderAuthorization] = await getAuthorization();
    return header;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxnQkFBZ0IsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQ04sMEJBQTBCLEVBQzFCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLGtCQUFrQixHQUNsQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsTUFBK0I7SUFDN0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDdEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsMEJBQTBCLENBQUM7SUFFM0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUMxQixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0QsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO0lBQzNELE9BQU8sTUFBTSxDQUFDO0FBQ2YsQ0FBQyJ9