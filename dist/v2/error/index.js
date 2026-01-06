function parse(record) {
    return (str) => {
        for (const key in record) {
            if (str.includes(key))
                return record[key];
        }
        return str;
    };
}
export default {
    parse,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjIvZXJyb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxLQUFLLENBQUMsTUFBOEI7SUFDNUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2QsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUMxQixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlO0lBQ2QsS0FBSztDQUNMLENBQUMifQ==