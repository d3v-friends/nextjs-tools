const fnRegexp = {
    boolean: "^(true|false)$",
    username: "^[a-z][a-z|0-9]{3,20}$",
    password: "^[a-z0-9A-Z~`!@#$%^&*\(\)\\-_=+\\[{\\]}\\\\\|;:'\",<.>/?]{7,20}$",
    otp: "^[0-9]{6}$",
    ipv4: "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
    ipv6: "^(?:(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?:(?::[0-9a-fA-F]{1,4}){1,6})|:(?:(?::[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(?::[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(?:ffff(?::0{1,4}){0,1}:){0,1}(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])|(?:[0-9a-fA-F]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$",
    lowerSnakeCase: "^[a-z0-9_]+$",
    rfc3339Time: "^\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])T(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?(?:Z|[+-](?:[01]\\d|2[0-3]):[0-5]\\d)$",
    objectId: "^[0-9a-fA-F]{24}$",
    port: "^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$\n",
    decimal: "^[-+]?\\d*\\.?\\d+$",
    number: "^-?[0-9]\\d*$",
};
export default fnRegexp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdjIvcmVnZXhwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sUUFBUSxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsUUFBUSxFQUFFLHdCQUF3QjtJQUNsQyxRQUFRLEVBQUUsa0VBQWtFO0lBQzVFLEdBQUcsRUFBRSxZQUFZO0lBQ2pCLElBQUksRUFBRSw4RkFBOEY7SUFDcEcsSUFBSSxFQUFFLG10QkFBbXRCO0lBQ3p0QixjQUFjLEVBQUUsY0FBYztJQUM5QixXQUFXLEVBQ1YsMklBQTJJO0lBQzVJLFFBQVEsRUFBRSxtQkFBbUI7SUFDN0IsSUFBSSxFQUFFLHVGQUF1RjtJQUM3RixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLE1BQU0sRUFBRSxlQUFlO0NBQ3ZCLENBQUM7QUFFRixlQUFlLFFBQVEsQ0FBQyJ9