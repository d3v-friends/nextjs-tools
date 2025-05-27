import { fnCookies } from "..";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "./types";
export class Client {
    host;
    header;
    constructor(host, header) {
        this.host = host;
        this.header = header;
    }
    appendHeader(header) {
        if (this.header) {
            header = { ...this.header, ...header };
        }
        return new Client(this.host, header);
    }
    replaceHeader(header) {
        return new Client(this.host, header);
    }
    replaceHost(host) {
        return new Client(host, this.header);
    }
    async query(query, variables) {
        try {
            return {
                data: await this.exec(query, variables),
            };
        }
        catch (e) {
            return {
                data: null,
                error: e instanceof Error ? e : new Error(JSON.stringify(e)),
            };
        }
    }
    async exec(query, variables) {
        let q = query.toString();
        if (query instanceof Array) {
            q = "";
            for (let str of query) {
                q = `${q}${str}`;
            }
        }
        const body = {
            method: "POST",
            headers: await fnCookies.newHeader(this.header),
            body: JSON.stringify({
                query: q,
                variables,
            }),
        };
        const response = await fetch(this.host, body);
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dyYXBocWwvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxJQUFJLENBQUM7QUFDN0IsT0FBTyxFQUFXLHVCQUF1QixFQUFFLHlCQUF5QixFQUFlLE1BQU0sU0FBUyxDQUFDO0FBU25HLE1BQU0sT0FBTyxNQUFNO0lBRUQ7SUFDQztJQUZsQixZQUNpQixJQUFZLEVBQ1gsTUFBK0I7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNYLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBQzlDLENBQUM7SUFFSixZQUFZLENBQUMsTUFBOEI7UUFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsTUFBTSxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQThCO1FBQzNDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdkIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUNWLEtBQW9DLEVBQ3BDLFNBQXNCO1FBRXRCLElBQUksQ0FBQztZQUNKLE9BQU87Z0JBQ04sSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBc0IsS0FBSyxFQUFFLFNBQVMsQ0FBQzthQUM1RCxDQUFDO1FBQ0gsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPO2dCQUNOLElBQUksRUFBRSxJQUFlO2dCQUNyQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVELENBQUM7UUFDSCxDQUFDO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQXNCLEtBQW9DLEVBQUUsU0FBc0I7UUFDM0YsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDUCxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUN2QixDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNGLENBQUM7UUFFRCxNQUFNLElBQUksR0FBRztZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNwQixLQUFLLEVBQUUsQ0FBQztnQkFDUixTQUFTO2FBQ1QsQ0FBQztTQUNGLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlDLFFBQVEsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLEtBQUssR0FBRztnQkFDUCxNQUFNLEdBQUcsR0FBUSxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7b0JBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHVCQUF1QixXQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNqQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcseUJBQXlCLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckYsQ0FBQztJQUNGLENBQUM7Q0FDRCJ9