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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jL2Nvb2tpZXMvbmV3LWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sZ0JBQWdCLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUNOLDBCQUEwQixFQUMxQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixrQkFBa0IsR0FDbEIsTUFBTSxTQUFTLENBQUM7QUFFakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsTUFBK0I7SUFDN0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDdEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsMEJBQTBCLENBQUM7SUFFM0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUMxQixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0QsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO0lBQzNELE9BQU8sTUFBTSxDQUFDO0FBQ2YsQ0FBQyJ9