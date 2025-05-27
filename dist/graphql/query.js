"use server";
import exec from "./exec";
export default async function (host, query, header, ...[variables]) {
    try {
        return {
            result: await exec({
                host,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC9xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFHMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQ25CLElBQVksRUFDWixLQUFvQyxFQUNwQyxNQUErQixFQUMvQixHQUFHLENBQUMsU0FBUyxDQUErRDtJQUU1RSxJQUFJLENBQUM7UUFDSixPQUFPO1lBQ04sTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDO2dCQUNsQixJQUFJO2dCQUNKLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixTQUFTO2FBQ1QsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNaLE9BQU87WUFDTixNQUFNLEVBQUUsSUFBZTtZQUN2QixLQUFLLEVBQUUsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVELENBQUM7SUFDSCxDQUFDO0FBQ0YsQ0FBQyJ9