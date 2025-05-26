import React, { useState } from 'react';

const ThemeToggle = () => {

    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme(!theme);
        document.body.classList.toggle("dark-mode")
    }

    return (
        <div className="theme-toggle">
            {theme ? <p>Dark mode</p> : <p>Light mode</p>}
            <div className={theme ? 'switch-mode' : "dark switch-mode"} onClick={toggleTheme}>
                <div></div>
            </div>
        </div>
    )
}

export default ThemeToggle