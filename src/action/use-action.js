"use client";
import { useActionState } from "react";
import { fnInput } from "..";
export default function (handler, formHelper) {
    const [state, action, pending] = useActionState(handler, {
        input: fnInput.fn.initInput(formHelper),
        value: fnInput.fn.initValue(formHelper),
    });
    return {
        state,
        action,
        pending,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZS1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNyQyxPQUFPLEVBQUMsT0FBTyxFQUFhLE1BQU0sSUFBSSxDQUFDO0FBR3ZDLE1BQU0sQ0FBQyxPQUFPLFdBQ2IsT0FBc0MsRUFDdEMsVUFBNkI7SUFNN0IsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsY0FBYyxDQUFtQyxPQUFPLEVBQUU7UUFDMUYsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUN2QyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0tBQ3ZDLENBQUMsQ0FBQztJQUVILE9BQU87UUFDTixLQUFLO1FBQ0wsTUFBTTtRQUNOLE9BQU87S0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9