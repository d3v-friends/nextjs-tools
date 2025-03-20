"use server";
import exec from "../graphql/exec";
export default async function (query, header, ...[variables]) {
    return exec({
        query,
        header,
        variables,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sSUFBSSxNQUFNLG9CQUFvQixDQUFDO0FBR3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUNuQixLQUFvQyxFQUNwQyxNQUErQixFQUMvQixHQUFHLENBQUMsU0FBUyxDQUErRDtJQUU1RSxPQUFPLElBQUksQ0FBQztRQUNYLEtBQUs7UUFDTCxNQUFNO1FBQ04sU0FBUztLQUNULENBQUMsQ0FBQztBQUNKLENBQUMifQ==