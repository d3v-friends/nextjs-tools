import { fnCookies } from "../cookies";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "./types";
export default class Client {
    host;
    header;
    constructor(host, header) {
        this.host = host;
        this.header = header;
    }
    addHeader(header) {
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
    async query(query, ...[variables]) {
        try {
            return {
                data: await this.exec({
                    query,
                    variables,
                }),
            };
        }
        catch (e) {
            return {
                data: null,
                error: e instanceof Error ? e : new Error(JSON.stringify(e)),
            };
        }
    }
    async inline(query, ...[variables]) {
        return this.exec({
            query,
            variables,
        });
    }
    async exec(args) {
        let query = args.query.toString();
        if (args.query instanceof Array) {
            query = "";
            for (let str of args.query) {
                query = `${query}${str}`;
            }
        }
        const body = {
            method: "POST",
            headers: await fnCookies.newHeader(this.header),
            body: JSON.stringify({
                query,
                variables: args.variables,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dyYXBocWwvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFXLHVCQUF1QixFQUFFLHlCQUF5QixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRXJGLE1BQU0sQ0FBQyxPQUFPLE9BQU8sTUFBTTtJQUVUO0lBQ1I7SUFGVCxZQUNpQixJQUFZLEVBQ3BCLE1BQStCO1FBRHZCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDckMsQ0FBQztJQUVKLFNBQVMsQ0FBQyxNQUE4QjtRQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixNQUFNLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBOEI7UUFDM0MsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBWTtRQUN2QixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQ1YsS0FBb0MsRUFDcEMsR0FBRyxDQUFDLFNBQVMsQ0FBK0Q7UUFFNUUsSUFBSSxDQUFDO1lBQ0osT0FBTztnQkFDTixJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNyQixLQUFLO29CQUNMLFNBQVM7aUJBQ1QsQ0FBQzthQUNGLENBQUM7UUFDSCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNaLE9BQU87Z0JBQ04sSUFBSSxFQUFFLElBQWU7Z0JBQ3JCLEtBQUssRUFBRSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUQsQ0FBQztRQUNILENBQUM7SUFDRixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FDWCxLQUFvQyxFQUNwQyxHQUFHLENBQUMsU0FBUyxDQUErRDtRQUU1RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSztZQUNMLFNBQVM7U0FDVCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBc0IsSUFBbUM7UUFDbEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsQyxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7WUFDakMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixLQUFLLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDMUIsQ0FBQztRQUNGLENBQUM7UUFFRCxNQUFNLElBQUksR0FBRztZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNwQixLQUFLO2dCQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUN6QixDQUFDO1NBQ0YsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFOUMsUUFBUSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekIsS0FBSyxHQUFHO2dCQUNQLE1BQU0sR0FBRyxHQUFRLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztvQkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO29CQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsdUJBQXVCLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2pCO2dCQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx5QkFBeUIsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRixDQUFDO0lBQ0YsQ0FBQztDQUNEIn0=