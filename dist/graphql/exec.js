"use server";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "./types";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2V4ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUFXLHVCQUF1QixFQUFFLHlCQUF5QixFQUF1QixNQUFNLFNBQVMsQ0FBQztBQVMzRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBZ0MsSUFBbUM7SUFFdEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVsQyxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7UUFDakMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0YsQ0FBQztJQUVELE1BQU0sSUFBSSxHQUFHO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUN6QixDQUFDO0tBQ0YsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFOUMsUUFBUSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsS0FBSyxHQUFHO1lBQ1AsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkMsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx1QkFBdUIsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3RSxDQUFDO1lBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2pCO1lBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHlCQUF5QixXQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7QUFDRixDQUFDIn0=