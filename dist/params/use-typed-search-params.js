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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXR5cGVkLXNlYXJjaC1wYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFyYW1zL3VzZS10eXBlZC1zZWFyY2gtcGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxNQUFNLENBQUMsT0FBTyxXQUFzRCxVQUFhO0lBQ2hGLE1BQU0sTUFBTSxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztJQUNwQixLQUFLLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzVCLFFBQVEsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxLQUFLLFFBQVE7Z0JBQ1osTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLFNBQVM7Z0JBQ1YsQ0FBQztnQkFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsU0FBUztnQkFDVixDQUFDO2dCQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFDUDtnQkFFQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNGLENBQUM7SUFDRCxPQUFPLEdBQVEsQ0FBQztBQUNqQixDQUFDIn0=