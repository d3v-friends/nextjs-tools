const fnInput = {
    onChangeNumber: (e) => {
        let numericValue = e.target.value
            .replace(/[^0-9.-]/g, "")
            .replace(/(\..*)\./g, "$1")
            .replace(/-/g, (_, index) => (index === 0 ? "-" : ""));
        if (numericValue.startsWith(".")) {
            numericValue = "0" + numericValue;
        }
        else if (numericValue.startsWith("-.")) {
            numericValue = "-0" + numericValue.substring(1);
        }
        return numericValue.replace(/^(-)?0+(?=\d)/, "$1");
    },
    getImage: (maxSizeMb = 5) => {
        return new Promise((resolve, reject) => {
            const input = document.createElement("input");
            input.setAttribute("hidden", "true");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.setAttribute("multiple", "false");
            input.onchange = () => {
                if (input.files == null)
                    return;
                if (input.files.length === 0)
                    return;
                if (1024 * 1024 * maxSizeMb < input.files[0].size) {
                    reject("over_max_size");
                    return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                    resolve(reader.result);
                    input.remove();
                };
                reader.onerror = (error) => reject(JSON.stringify(error));
                reader.readAsDataURL(input.files[0]);
            };
            input.click();
        });
    },
};
export default fnInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjIvaW5wdXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLEdBQUc7SUFDZixjQUFjLEVBQUUsQ0FBQyxDQUFzQyxFQUFVLEVBQUU7UUFDbEUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBRS9CLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2FBRXhCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO2FBRTFCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUd4RCxJQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxZQUFZLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUNuQyxDQUFDO2FBRUksSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDeEMsWUFBWSxHQUFHLElBQUksR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFJRCxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFtQixFQUFFO1FBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDdEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtnQkFDckIsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQUUsT0FBTztnQkFDaEMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUN4QixPQUFPO2dCQUNSLENBQUM7Z0JBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO29CQUNqQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQztnQkFDRixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUM7WUFFRixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFDO0FBRUYsZUFBZSxPQUFPLENBQUMifQ==