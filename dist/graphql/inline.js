"use server";
import exec from "./exec";
export default async function (query, header, ...[variables]) {
    return exec({
        query,
        header,
        variables,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmMvZ3JhcGhxbC9pbmxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBRTFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUNuQixLQUErQyxFQUMvQyxNQUErQixFQUMvQixHQUFHLENBQUMsU0FBUyxDQUErRDtJQUU1RSxPQUFPLElBQUksQ0FBQztRQUNYLEtBQUs7UUFDTCxNQUFNO1FBQ04sU0FBUztLQUNULENBQUMsQ0FBQztBQUNKLENBQUMifQ==