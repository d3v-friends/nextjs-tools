"use server";
import fnCookies from "../cookies";
import fnEnv from "../env";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "../graphql/types";
const envHost = "GQL_HOST";
export default async function (args) {
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
        headers: await fnCookies.newHeader(args.header),
        body: JSON.stringify({
            query,
            variables: args.variables,
        }),
    };
    const response = await fetch(await fnEnv.server.string(envHost), body);
    switch (response.status) {
        case 200:
            const res = await response.json();
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2dyYXBocWwvZXhlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLFNBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxLQUFLLE1BQU0sV0FBVyxDQUFDO0FBQzlCLE9BQU8sRUFBVyx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRWpHLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQztBQWdCM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQWdDLElBQW1DO0lBQ3RGLHFFQUFxRTtJQUNyRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRWxDLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztRQUNqQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsS0FBSyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBRUQsTUFBTSxJQUFJLEdBQUc7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFLO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3pCLENBQUM7S0FDRixDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV2RSxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixLQUFLLEdBQUc7WUFDUCxNQUFNLEdBQUcsR0FBUSxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXhELElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFFLEdBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsdUJBQXVCLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0UsQ0FBQztZQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNqQjtZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx5QkFBeUIsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRixDQUFDO0FBQ0YsQ0FBQyJ9