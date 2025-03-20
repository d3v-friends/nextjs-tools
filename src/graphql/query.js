"use server";
import exec from "./exec";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFHMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQ25CLEtBQW9DLEVBQ3BDLE1BQStCLEVBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQStEO0lBRTVFLElBQUksQ0FBQztRQUNKLE9BQU87WUFDTixNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUM7Z0JBQ2xCLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixTQUFTO2FBQ1QsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNaLE9BQU87WUFDTixNQUFNLEVBQUUsSUFBZTtZQUN2QixLQUFLLEVBQUUsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVELENBQUM7SUFDSCxDQUFDO0FBQ0YsQ0FBQyJ9