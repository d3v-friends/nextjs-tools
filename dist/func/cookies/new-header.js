"use server";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { headers } from "next/headers";
import getAuthorization from "../cookies/get-authorization";
import { contentTypeApplicationJson, httpHeaderAuthorization, httpHeaderContentType, httpHeaderUserAgent, httpXForwardedHost, } from "src/func/cookies/types";
export default function (header) {
    return __awaiter(this, void 0, void 0, function* () {
        header = header || {};
        header[httpHeaderContentType] = contentTypeApplicationJson;
        const h = yield headers();
        header[httpHeaderUserAgent] = h.get(httpHeaderUserAgent) || "";
        header[httpXForwardedHost] = h.get(httpXForwardedHost) || "";
        header[httpHeaderAuthorization] = yield getAuthorization();
        return header;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2Nvb2tpZXMvbmV3LWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFDYixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sZ0JBQWdCLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUNOLDBCQUEwQixFQUMxQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixrQkFBa0IsR0FDbEIsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxNQUFNLENBQUMsT0FBTyxXQUFpQixNQUErQjs7UUFDN0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsMEJBQTBCLENBQUM7UUFFM0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0QsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO1FBQzNELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztDQUFBIn0=