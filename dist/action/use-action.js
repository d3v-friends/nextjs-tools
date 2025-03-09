"use client";
import { useActionState } from "react";
import fnInput from "../input";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jL2FjdGlvbi91c2UtYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDckMsT0FBTyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBSS9CLE1BQU0sQ0FBQyxPQUFPLFdBQ2IsT0FBc0MsRUFDdEMsVUFBNkI7SUFNN0IsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsY0FBYyxDQUFtQyxPQUFPLEVBQUU7UUFDMUYsS0FBSyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0tBQ3ZDLENBQUMsQ0FBQztJQUVILE9BQU87UUFDTixLQUFLO1FBQ0wsTUFBTTtRQUNOLE9BQU87S0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9