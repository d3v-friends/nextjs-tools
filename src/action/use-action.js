"use client";
import { useActionState } from "react";
import { fnInput } from "..";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZS1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNyQyxPQUFPLEVBQUMsT0FBTyxFQUFhLE1BQU0sSUFBSSxDQUFDO0FBR3ZDLE1BQU0sQ0FBQyxPQUFPLFdBQ2IsT0FBc0MsRUFDdEMsVUFBNkI7SUFNN0IsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsY0FBYyxDQUFtQyxPQUFPLEVBQUU7UUFDMUYsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztLQUN2QyxDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ04sS0FBSztRQUNMLE1BQU07UUFDTixPQUFPO0tBQ1AsQ0FBQztBQUNILENBQUMifQ==