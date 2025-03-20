"use server";
import exec from "./exec";
export default async function (query, header, ...[variables]) {
    return exec({
        query,
        header,
        variables,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUcxQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FDbkIsS0FBb0MsRUFDcEMsTUFBK0IsRUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBK0Q7SUFFNUUsT0FBTyxJQUFJLENBQUM7UUFDWCxLQUFLO1FBQ0wsTUFBTTtRQUNOLFNBQVM7S0FDVCxDQUFDLENBQUM7QUFDSixDQUFDIn0=