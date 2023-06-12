import React, { useState } from "react";
import { FontContext } from "./FontContext";

const FontProvider = ({ children }) => {
    const [font, setFont] = useState("sans-serif");

    return (
        <FontContext.Provider value={{ font, setFont }}>
            {children}
        </FontContext.Provider>

    );
};

export default FontProvider;