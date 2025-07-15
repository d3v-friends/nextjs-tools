import React from "react";
declare const fnInput: {
    onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => string;
    getImage: (maxSizeMb?: number) => Promise<string>;
};
export default fnInput;
