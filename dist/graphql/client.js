import { fnCookies } from "@root";
import { errEmptyGraphqlResponse, errUnexpectedGraphqlError } from "@root/graphql/types";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dyYXBocWwvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDaEMsT0FBTyxFQUFXLHVCQUF1QixFQUFFLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFakcsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFNO0lBRVQ7SUFDUjtJQUZULFlBQ2lCLElBQVksRUFDcEIsTUFBK0I7UUFEdkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNyQyxDQUFDO0lBRUosU0FBUyxDQUFDLE1BQThCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLE1BQU0sR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUE4QjtRQUMzQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FDVixLQUFvQyxFQUNwQyxHQUFHLENBQUMsU0FBUyxDQUErRDtRQUU1RSxJQUFJLENBQUM7WUFDSixPQUFPO2dCQUNOLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLEtBQUs7b0JBQ0wsU0FBUztpQkFDVCxDQUFDO2FBQ0YsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1osT0FBTztnQkFDTixJQUFJLEVBQUUsSUFBZTtnQkFDckIsS0FBSyxFQUFFLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RCxDQUFDO1FBQ0gsQ0FBQztJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUNYLEtBQW9DLEVBQ3BDLEdBQUcsQ0FBQyxTQUFTLENBQStEO1FBRTVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoQixLQUFLO1lBQ0wsU0FBUztTQUNULENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFzQixJQUFtQztRQUNsRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztZQUNqQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ1gsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUMxQixDQUFDO1FBQ0YsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BCLEtBQUs7Z0JBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3pCLENBQUM7U0FDRixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixLQUFLLEdBQUc7Z0JBQ1AsTUFBTSxHQUFHLEdBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUNsQyxNQUFNLElBQUksS0FBSyxDQUFFLEdBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyx1QkFBdUIsV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDakI7Z0JBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLHlCQUF5QixXQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7SUFDRixDQUFDO0NBQ0QifQ==