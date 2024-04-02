import React from 'react';
import { useState } from 'react';
import { LI } from '../../../AbstractElements'
import SvgIcon from '../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';

export default function MoonLight() {
    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = (name: boolean) => {
        if (name) {
            document.body.classList.remove("dark-only");
            document.body.classList.add("light-only");
            setDarkMode(!darkMode);
        } else {
            document.body.classList.remove("light-only");
            document.body.classList.add("dark-only");
            setDarkMode(!darkMode);
        }
    };
    return (
        <LI>
            <div className={`mode ${darkMode ? "active" : ""}`} onClick={() => darkModeHandler(darkMode)}>
                <SvgIcon iconId='fill-dark' />
            </div>
        </LI>
    )
}
