import React, { Fragment, useState } from 'react'
import { CallbackNavType } from '../../Types/LayoutTypes';
import NavCustomizer from './NavCustomizer';
import TabCustomizer from './TabCustomizer';

export default function ThemeCustomizer() {
    const [selected, setSelected] = useState('check-layout');
    const [openCus, setOpenCus] = useState(false);

    const callbackNav: CallbackNavType = (select, open) => {
        setSelected(select);
        setOpenCus(open);
    };

    return (
        <Fragment>
            <div className={`customizer-links ${openCus ? "open" : ""}`}>
                <NavCustomizer callbackNav={callbackNav} selected={selected} />
            </div>
            <div className={`customizer-contain ${openCus ? "open" : ""}`}>
                <TabCustomizer selected={selected} callbackNav={callbackNav} />
            </div>
        </Fragment>
    )
}
