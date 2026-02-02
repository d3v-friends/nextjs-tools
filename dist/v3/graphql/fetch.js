"use server";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "../../index.js";
export default async function (args) {
    let query = args.query.toString();
    if (args.query instanceof Array) {
        query = "";
        for (let str of args.query) {
            query = `${query}${str}`;
        }
    }
    const body = {
        method: "POST",
        headers: args.header,
        body: JSON.stringify({
            query,
            variables: args.variables,
        }),
    };
    const response = await fetch(args.host, body);
    switch (response.status) {
        case 200:
            const res = await response.json();
            if (res.hasOwnProperty("errors")) {
                throw new Error(res.errors[0].message);
            }
            if (!res.hasOwnProperty("data")) {
                throw new Error(`${errEmptyGraphqlResponse}: value=${JSON.stringify(res)}`);
            }
            return res.data;
        default:
            throw new Error(`${errUnexpectedGraphqlError}: value=${JSON.stringify(response)}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjMvZ3JhcGhxbC9mZXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQVcsdUJBQXVCLEVBQUUseUJBQXlCLEVBQXVCLE1BQU0sT0FBTyxDQUFDO0FBU3pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFnQyxJQUFvQztJQUV2RixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRWxDLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztRQUNqQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsS0FBSyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBRUQsTUFBTSxJQUFJLEdBQUc7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFLO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3pCLENBQUM7S0FDRixDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU5QyxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixLQUFLLEdBQUc7WUFDUCxNQUFNLEdBQUcsR0FBUSxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHVCQUF1QixXQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDakI7WUFDQyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcseUJBQXlCLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckYsQ0FBQztBQUNGLENBQUMifQ==