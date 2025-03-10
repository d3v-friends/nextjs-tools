"use server";
import exec from "func/graphql/exec";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUdyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FDbkIsS0FBb0MsRUFDcEMsTUFBK0IsRUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBK0Q7SUFFNUUsSUFBSSxDQUFDO1FBQ0osT0FBTztZQUNOLE1BQU0sRUFBRSxNQUFNLElBQUksQ0FBQztnQkFDbEIsS0FBSztnQkFDTCxNQUFNO2dCQUNOLFNBQVM7YUFDVCxDQUFDO1NBQ0YsQ0FBQztJQUNILENBQUM7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1osT0FBTztZQUNOLE1BQU0sRUFBRSxJQUFlO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQsQ0FBQztJQUNILENBQUM7QUFDRixDQUFDIn0=