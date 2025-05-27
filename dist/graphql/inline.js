"use server";
import exec from "./exec";
export default async function (host, query, header, ...[variables]) {
    return exec({
        host,
        query,
        header,
        variables,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dyYXBocWwvaW5saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUcxQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FDbkIsSUFBWSxFQUNaLEtBQW9DLEVBQ3BDLE1BQStCLEVBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQStEO0lBRTVFLE9BQU8sSUFBSSxDQUFDO1FBQ1gsSUFBSTtRQUNKLEtBQUs7UUFDTCxNQUFNO1FBQ04sU0FBUztLQUNULENBQUMsQ0FBQztBQUNKLENBQUMifQ==