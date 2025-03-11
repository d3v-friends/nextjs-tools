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
import { cookies } from "next/headers";
import { httpHeaderAuthorization } from "../cookies/types";
export default function () {
    return __awaiter(this, void 0, void 0, function* () {
        const c = yield cookies();
        c.delete(httpHeaderAuthorization);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItYXV0aG9yaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2Nvb2tpZXMvY2xlYXItYXV0aG9yaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFDYixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRTVELE1BQU0sQ0FBQyxPQUFPOztRQUNiLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FBQSJ9