"use server";
import { fnCookies } from "../cookies";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "./types";
export default class Client {
    envKeyHost;
    header;
    host;
    constructor(envKeyHost, header) {
        this.envKeyHost = envKeyHost;
        this.header = header;
        this.host = process.env[envKeyHost || "GQL_HOST"] || "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dyYXBocWwvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFXLHVCQUF1QixFQUFFLHlCQUF5QixFQUFlLE1BQU0sU0FBUyxDQUFDO0FBRW5HLE1BQU0sQ0FBQyxPQUFPLE9BQU8sTUFBTTtJQUlUO0lBQ1I7SUFKTyxJQUFJLENBQUM7SUFFckIsWUFDaUIsVUFBbUIsRUFDM0IsTUFBK0I7UUFEdkIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUV2QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQThCO1FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLE1BQU0sR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUE4QjtRQUMzQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FDVixLQUFvQyxFQUNwQyxTQUFzQjtRQUV0QixJQUFJLENBQUM7WUFDSixPQUFPO2dCQUNOLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQXNCLEtBQUssRUFBRSxTQUFTLENBQUM7YUFDNUQsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1osT0FBTztnQkFDTixJQUFJLEVBQUUsSUFBZTtnQkFDckIsS0FBSyxFQUFFLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RCxDQUFDO1FBQ0gsQ0FBQztJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFzQixLQUFvQyxFQUFFLFNBQXNCO1FBQzNGLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1AsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLENBQUM7UUFDRixDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUc7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDcEIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsU0FBUzthQUNULENBQUM7U0FDRixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixLQUFLLEdBQUc7Z0JBQ1AsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUNsQyxNQUFNLElBQUksS0FBSyxDQUFFLEdBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx1QkFBdUIsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDakI7Z0JBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHlCQUF5QixXQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7SUFDRixDQUFDO0NBQ0QifQ==