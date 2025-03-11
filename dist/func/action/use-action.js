"use client";
import fnInput from "../input";
import { useActionState } from "react";
export default function (handler, formHelper) {
    const [state, action, pending] = useActionState(handler, {
        input: fnInput.fn.initValue(formHelper),
    });
    return {
        state,
        action,
        pending,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2FjdGlvbi91c2UtYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUdiLE9BQU8sT0FBTyxNQUFNLGFBQWEsQ0FBQztBQUVsQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxPQUFPLFdBQ2IsT0FBc0MsRUFDdEMsVUFBNkI7SUFNN0IsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsY0FBYyxDQUFtQyxPQUFPLEVBQUU7UUFDMUYsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztLQUN2QyxDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ04sS0FBSztRQUNMLE1BQU07UUFDTixPQUFPO0tBQ1AsQ0FBQztBQUNILENBQUMifQ==