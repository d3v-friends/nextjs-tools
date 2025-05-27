"use server";
import fnExec from "./exec";
export default async function (host, header) {
    header = header || {};
    const c = {
        host,
        header,
        appendHeader(v) {
            return {
                ...this,
                header: {
                    ...this.header,
                    ...v,
                },
            };
        },
        replace({ host, header, }) {
            return {
                ...this,
                host: host ? host : this.host,
                header: header ? header : this.header,
            };
        },
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
        },
        async exec(query, variables) {
            return fnExec({
                query,
                header: this.header,
                host: this.host,
                variables,
            });
        },
    };
    return c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dyYXBocWwvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUc1QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxJQUFZLEVBQUUsTUFBZTtJQUMzRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUN0QixNQUFNLENBQUMsR0FBa0I7UUFDeEIsSUFBSTtRQUNKLE1BQU07UUFDTixZQUFZLENBQUMsQ0FBUztZQUNyQixPQUFPO2dCQUNOLEdBQUcsSUFBSTtnQkFDUCxNQUFNLEVBQUU7b0JBQ1AsR0FBRyxJQUFJLENBQUMsTUFBTTtvQkFDZCxHQUFHLENBQUM7aUJBQ0o7YUFDRCxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sQ0FBQyxFQUNQLElBQUksRUFDSixNQUFNLEdBSUw7WUFDRCxPQUFPO2dCQUNOLEdBQUcsSUFBSTtnQkFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUM3QixNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQ3JDLENBQUM7UUFDSCxDQUFDO1FBQ0QsS0FBSyxDQUFDLEtBQUssQ0FDVixLQUFvQyxFQUNwQyxTQUFzQjtZQUt0QixJQUFJLENBQUM7Z0JBQ0osT0FBTztvQkFDTixJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFzQixLQUFLLEVBQUUsU0FBUyxDQUFDO2lCQUM1RCxDQUFDO1lBQ0gsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1osT0FBTztvQkFDTixJQUFJLEVBQUUsSUFBZTtvQkFDckIsS0FBSyxFQUFFLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDNUQsQ0FBQztZQUNILENBQUM7UUFDRixDQUFDO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FDVCxLQUFvQyxFQUNwQyxTQUFzQjtZQUV0QixPQUFPLE1BQU0sQ0FBQztnQkFDYixLQUFLO2dCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLFNBQVM7YUFDVCxDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0QsQ0FBQztJQUVGLE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQyJ9