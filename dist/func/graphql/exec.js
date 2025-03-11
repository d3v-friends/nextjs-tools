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
import fnCookies from "../cookies";
import fnEnv from "../env";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "../graphql/types";
const envHost = "GQL_HOST";
export default function (args) {
    return __awaiter(this, void 0, void 0, function* () {
        // todo 클라이언트 컴포넌트에서 쿼리를 불러오면 array 로 넘어오는 문제가 있는데 원인을 밝히지 못함.추후 알아보기
        let query = args.query.toString();
        if (args.query instanceof Array) {
            query = "";
            for (let str of args.query) {
                query = `${query}${str}`;
            }
        }
        const body = {
            method: "POST",
            headers: yield fnCookies.newHeader(args.header),
            body: JSON.stringify({
                query,
                variables: args.variables,
            }),
        };
        const response = yield fetch(yield fnEnv.server.string(envHost), body);
        switch (response.status) {
            case 200:
                const res = yield response.json();
                console.log("fetch_success", body, JSON.stringify(res));
                if (res.hasOwnProperty("errors")) {
                    throw new Error(res.errors[0].message);
                }
                if (!res.hasOwnProperty("data")) {
                    throw new Error(`${errEmptyGraphqlResponse}: value=${JSON.stringify(res)}`);
                }
                return res.data;
            default:
                console.log("fetch_failed", body);
                throw new Error(`${errUnexpectedGraphqlError}: value=${JSON.stringify(response)}`);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2dyYXBocWwvZXhlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFDYixPQUFPLFNBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxLQUFLLE1BQU0sV0FBVyxDQUFDO0FBQzlCLE9BQU8sRUFBVyx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRWpHLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQztBQWdCM0IsTUFBTSxDQUFDLE9BQU8sV0FBc0MsSUFBbUM7O1FBQ3RGLHFFQUFxRTtRQUNyRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztZQUNqQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ1gsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUMxQixDQUFDO1FBQ0YsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BCLEtBQUs7Z0JBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3pCLENBQUM7U0FDRixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2RSxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixLQUFLLEdBQUc7Z0JBQ1AsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRXhELElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUNsQyxNQUFNLElBQUksS0FBSyxDQUFFLEdBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx1QkFBdUIsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDakI7Z0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx5QkFBeUIsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRixDQUFDO0lBQ0YsQ0FBQztDQUFBIn0=