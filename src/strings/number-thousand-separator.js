export default function (value) {
    const number = typeof value === "string" ? parseFloat(value) : value;
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRob3VzYW5kLXNlcGFyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm51bWJlci10aG91c2FuZC1zZXBhcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sV0FBVyxLQUFzQjtJQUM5QyxNQUFNLE1BQU0sR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3JFLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRSxDQUFDIn0=