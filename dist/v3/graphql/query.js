import fetch from "./fetch.js";
export default async function (host, query, header, variables) {
    try {
        return {
            data: await fetch({
                host,
                query,
                header,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjMvZ3JhcGhxbC9xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFFNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQ25CLElBQVksRUFDWixLQUFvQyxFQUNwQyxNQUFlLEVBQ2YsU0FBc0I7SUFFdEIsSUFBSSxDQUFDO1FBQ0osT0FBTztZQUNOLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztnQkFDakIsSUFBSTtnQkFDSixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sU0FBUzthQUNULENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDWixPQUFPO1lBQ04sSUFBSSxFQUFFLElBQWU7WUFDckIsS0FBSyxFQUFFLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RCxDQUFDO0lBQ0gsQ0FBQztBQUNGLENBQUMifQ==