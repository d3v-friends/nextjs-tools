"use client";
import { useState } from "react";
export default function (fn) {
    const [pending, onChangePending] = useState(false);
    return [
        pending,
        async (...i) => {
            onChangePending(true);
            try {
                return await fn(...i);
            }
            finally {
                onChangePending(false);
            }
        },
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXBlbmRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjMvaG9vay91c2UtcGVuZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBSy9CLE1BQU0sQ0FBQyxPQUFPLFdBQStCLEVBQVk7SUFDeEQsTUFBTSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsT0FBTztRQUNOLE9BQU87UUFDUCxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNkLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUM7Z0JBQ0osT0FBTyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7b0JBQVMsQ0FBQztnQkFDVixlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNGLENBQUM7S0FDRCxDQUFDO0FBQ0gsQ0FBQyJ9