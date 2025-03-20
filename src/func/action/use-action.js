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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZS1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBR2IsT0FBTyxPQUFPLE1BQU0sYUFBYSxDQUFDO0FBRWxDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFFckMsTUFBTSxDQUFDLE9BQU8sV0FDYixPQUFzQyxFQUN0QyxVQUE2QjtJQU03QixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxjQUFjLENBQW1DLE9BQU8sRUFBRTtRQUMxRixLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0tBQ3ZDLENBQUMsQ0FBQztJQUVILE9BQU87UUFDTixLQUFLO1FBQ0wsTUFBTTtRQUNOLE9BQU87S0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9