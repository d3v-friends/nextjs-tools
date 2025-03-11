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
export default function (auth) {
    return __awaiter(this, void 0, void 0, function* () {
        const c = yield cookies();
        c.set(httpHeaderAuthorization, auth, {
            httpOnly: true,
            secure: process.env.NODE_ENV != "development",
            sameSite: "strict",
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWF1dGhvcml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9jb29raWVzL3NldC1hdXRob3JpemF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUNiLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDckMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFNUQsTUFBTSxDQUFDLE9BQU8sV0FBaUIsSUFBWTs7UUFDMUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksRUFBRTtZQUNwQyxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhO1lBQzdDLFFBQVEsRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FBQSJ9