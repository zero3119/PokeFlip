import { useState } from "react";
import React from "react";

const Mode = () => {
  const [mode, setMode] = useState("menu1");
    return(
        <div>
            {mode === "menu1" && <p className="self-align:center">jkasbdgkjh</p>}

        </div>
    );
    // This will be all in onw page now.
}

export default Mode;

