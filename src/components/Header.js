import React, { useState } from "react";

function Header({ isDarkMode, darkMode }) {

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={darkMode}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}


export default Header