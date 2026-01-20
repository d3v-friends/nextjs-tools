"use client";
import { LogLevel } from "./types.js";
export class Logger {
    level;
    constructor(level = LogLevel.INFO) {
        this.level = level;
    }
    static getLevel(key = "info") {
        switch (key.toLowerCase()) {
            case "trace":
                return LogLevel.TRACE;
            case "debug":
                return LogLevel.DEBUG;
            case "info":
                return LogLevel.INFO;
            case "warn":
                return LogLevel.WARN;
            case "error":
                return LogLevel.ERROR;
            default:
                return LogLevel.INFO;
        }
    }
    trace(...args) {
        if (LogLevel.TRACE < this.level)
            return;
        console.trace(...args);
    }
    debug(...args) {
        if (LogLevel.DEBUG < this.level)
            return;
        console.debug(...args);
    }
    info(...args) {
        if (LogLevel.INFO < this.level)
            return;
        console.info(...args);
    }
    warn(...args) {
        if (LogLevel.WARN < this.level)
            return;
        console.warn(...args);
    }
    error(...args) {
        if (LogLevel.ERROR < this.level)
            return;
        console.error(...args);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3YzL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVqQyxNQUFNLE9BQU8sTUFBTTtJQUNVO0lBQTVCLFlBQTRCLFFBQVEsUUFBUSxDQUFDLElBQUk7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBRyxDQUFDO0lBRTlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBYyxNQUFNO1FBQzFDLFFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDM0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUN0QixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0YsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLElBQVc7UUFDMUIsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLElBQVc7UUFDMUIsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFHLElBQVc7UUFDekIsSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFHLElBQVc7UUFDekIsSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLElBQVc7UUFDMUIsSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNEIn0=