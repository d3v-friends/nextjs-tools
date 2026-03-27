"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
export default function (fc, { defaultBackgroundStyle = true, backgroundClassName = "", center = true, escape = true } = {}) {
    return new Promise((resolve) => {
        const cont = document.createElement("div");
        cont.style.position = "fixed";
        cont.style.top = "0";
        cont.style.left = "0";
        cont.style.width = "100vw";
        cont.style.height = "100vh";
        if (defaultBackgroundStyle) {
            cont.style.backgroundColor = "rgba(0,0,0,0.2)";
            cont.style.backdropFilter = "blur(2px) grayscale(40%)";
        }
        cont.className = backgroundClassName;
        document.body.style.overflow = "hidden";
        document.body.appendChild(cont);
        const root = createRoot(cont);
        const unmount = (value) => {
            root.unmount();
            cont.remove();
            document.body.style.overflow = "unset";
            if (escape)
                window.addEventListener("keydown", onEscape);
            resolve(value);
        };
        const onEscape = (e) => {
            if (e.key === "Escape") {
                unmount(false);
            }
        };
        if (escape) {
            window.addEventListener("keydown", onEscape);
        }
        const style = {
            width: "100%",
            height: "100%",
        };
        if (center) {
            style.display = "flex";
            style.justifyContent = "center";
            style.alignItems = "center";
        }
        root.render(_jsx("div", { style: style, children: fc(unmount) }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92My9tb2RhbC9iYXNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBR2IsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBVzVDLE1BQU0sQ0FBQyxPQUFPLFdBQ2IsRUFBVyxFQUNYLEVBQUMsc0JBQXNCLEdBQUcsSUFBSSxFQUFFLG1CQUFtQixHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLEtBQTJCLEVBQUU7SUFFbkgsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUU1QixJQUFJLHNCQUFzQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFDeEQsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFHckMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3ZDLElBQUksTUFBTTtnQkFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRXpELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixDQUFDO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNaLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFrQjtZQUM1QixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1NBQ2QsQ0FBQztRQUVGLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWixLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztZQUNoQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFLLEtBQUssRUFBRSxLQUFLLFlBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMifQ==