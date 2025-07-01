"use server";
import { httpHeaderAuthorization } from "../../index.js";
import { cookies } from "next/headers";
export default async function () {
    const c = await cookies();
    c.delete(httpHeaderAuthorization);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92Mi9jb29raWVzL2NsZWFyLWF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzlDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO0lBQ25CLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ25DLENBQUMifQ==