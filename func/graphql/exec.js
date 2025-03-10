"use server";
import { fnCookies, fnEnv } from "index";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "func/graphql/types";
const envHost = "GQL_HOST";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDdkMsT0FBTyxFQUFXLHVCQUF1QixFQUFFLHlCQUF5QixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFaEcsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDO0FBZ0IzQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBZ0MsSUFBbUM7SUFFdEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVsQyxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7UUFDakMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0YsQ0FBQztJQUVELE1BQU0sSUFBSSxHQUFHO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUN6QixDQUFDO0tBQ0YsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdkUsUUFBUSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsS0FBSyxHQUFHO1lBQ1AsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUV4RCxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHVCQUF1QixXQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDakI7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcseUJBQXlCLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckYsQ0FBQztBQUNGLENBQUMifQ==