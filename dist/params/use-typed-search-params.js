"use client";
import { useSearchParams } from "next/navigation";
export default function (initParams) {
    const params = useSearchParams();
    const res = {};
    for (let key in initParams) {
        switch (typeof initParams[key]) {
            case "number":
                const value = params.get(key);
                if (!value) {
                    res[key] = initParams[key];
                    continue;
                }
                if (Number.isNaN(Number(value))) {
                    res[key] = initParams[key];
                    continue;
                }
                res[key] = Number(value);
                break;
            default:
                res[key] = params.get(key) || initParams[key];
        }
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXR5cGVkLXNlYXJjaC1wYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFyYW1zL3VzZS10eXBlZC1zZWFyY2gtcGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUloRCxNQUFNLENBQUMsT0FBTyxXQUErQixVQUF1QjtJQUNuRSxNQUFNLE1BQU0sR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7SUFDcEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM1QixRQUFRLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEMsS0FBSyxRQUFRO2dCQUNaLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDWixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixTQUFTO2dCQUNWLENBQUM7Z0JBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLFNBQVM7Z0JBQ1YsQ0FBQztnQkFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1A7Z0JBRUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDRixDQUFDO0lBQ0QsT0FBTyxHQUFrQixDQUFDO0FBQzNCLENBQUMifQ==