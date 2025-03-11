"use server";
import exec from "../graphql/exec";
export default async function (query, header, ...[variables]) {
    return exec({
        query,
        header,
        variables,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Z1bmMvZ3JhcGhxbC9pbmxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxJQUFJLE1BQU0sb0JBQW9CLENBQUM7QUFHdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQ25CLEtBQW9DLEVBQ3BDLE1BQStCLEVBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQStEO0lBRTVFLE9BQU8sSUFBSSxDQUFDO1FBQ1gsS0FBSztRQUNMLE1BQU07UUFDTixTQUFTO0tBQ1QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9