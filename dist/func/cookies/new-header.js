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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2Nvb2tpZXMvbmV3LWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLGdCQUFnQixNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFDTiwwQkFBMEIsRUFDMUIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsa0JBQWtCLEdBQ2xCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxNQUErQjtJQUM3RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUN0QixNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRywwQkFBMEIsQ0FBQztJQUUzRCxNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RCxNQUFNLENBQUMsdUJBQXVCLENBQUMsR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDM0QsT0FBTyxNQUFNLENBQUM7QUFDZixDQUFDIn0=