"use server";
import { contentTypeApplicationJson, getAuth, httpHeaderAuthorization, httpHeaderContentType, httpHeaderUserAgent, httpXForwardedHost, } from "../../index.js";
import { headers } from "next/headers";
export default async function (header) {
    const h = await headers();
    header = header || {};
    header[httpHeaderContentType] = contentTypeApplicationJson;
    header[httpHeaderUserAgent] = h.get(httpHeaderUserAgent) || "";
    header[httpXForwardedHost] = h.get(httpXForwardedHost) || "";
    header[httpHeaderAuthorization] = await getAuth();
    return header;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWhlYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjIvY29va2llcy9nZXQtaGVhZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQ04sMEJBQTBCLEVBQzFCLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixrQkFBa0IsR0FDbEIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLE1BQStCO0lBQzdELE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFFMUIsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDdEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsMEJBQTBCLENBQUM7SUFDM0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDbEQsT0FBTyxNQUFNLENBQUM7QUFDZixDQUFDIn0=