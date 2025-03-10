"use client";
import { useActionState } from "react";
import fnInput from "func/input";
export default function (handler, formHelper) {
    const [state, action, pending] = useActionState(handler, {
        input: fnInput.newInitValue(formHelper),
    });
    return {
        state,
        action,
        pending,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZS1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNyQyxPQUFPLE9BQU8sTUFBTSxZQUFZLENBQUM7QUFJakMsTUFBTSxDQUFDLE9BQU8sV0FDYixPQUFzQyxFQUN0QyxVQUE2QjtJQU03QixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxjQUFjLENBQW1DLE9BQU8sRUFBRTtRQUMxRixLQUFLLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7S0FDdkMsQ0FBQyxDQUFDO0lBRUgsT0FBTztRQUNOLEtBQUs7UUFDTCxNQUFNO1FBQ04sT0FBTztLQUNQLENBQUM7QUFDSCxDQUFDIn0=