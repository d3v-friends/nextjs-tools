"use server";
import exec from "../graphql/exec";
export default async function (query, header, ...[variables]) {
    try {
        return {
            result: await exec({
                query,
                header,
                variables,
            }),
        };
    }
    catch (e) {
        return {
            result: null,
            error: e instanceof Error ? e : new Error(JSON.stringify(e)),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9ncmFwaHFsL3F1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sSUFBSSxNQUFNLG9CQUFvQixDQUFDO0FBR3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUNuQixLQUFvQyxFQUNwQyxNQUErQixFQUMvQixHQUFHLENBQUMsU0FBUyxDQUErRDtJQUU1RSxJQUFJLENBQUM7UUFDSixPQUFPO1lBQ04sTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDO2dCQUNsQixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sU0FBUzthQUNULENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDWixPQUFPO1lBQ04sTUFBTSxFQUFFLElBQWU7WUFDdkIsS0FBSyxFQUFFLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RCxDQUFDO0lBQ0gsQ0FBQztBQUNGLENBQUMifQ==