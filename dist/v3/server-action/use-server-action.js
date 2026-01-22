"use client";
import { useActionState } from "react";
export default function (serverAction) {
    return useActionState(serverAction, {
        input: null,
        response: null,
        time: 0,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXNlcnZlci1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjMvc2VydmVyLWFjdGlvbi91c2Utc2VydmVyLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFHYixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxPQUFPLFdBQ2IsWUFBZ0M7SUFFaEMsT0FBTyxjQUFjLENBQW9DLFlBQVksRUFBRTtRQUN0RSxLQUFLLEVBQUUsSUFBUztRQUNoQixRQUFRLEVBQUUsSUFBUztRQUNuQixJQUFJLEVBQUUsQ0FBQztLQUNQLENBQUMsQ0FBQztBQUNKLENBQUMifQ==