import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { H6, LI, UL } from '../../../../AbstractElements'
import { lightColorOptions } from '../../../../Data/ThemeCustomizerData'
import { addSideBarBackGround } from '../../../../redux-toolkit/reducers/ThemeCustomizerReducer';
import { LightLayoutTitle } from '../../../../Utils/Constants';

export default function LightLayout() {
    const dispatch = useDispatch();
    const [colorBackground1, setColorBackground1] = useState("");
    const [colorBackground2, setColorBackground2] = useState("");

    const handleColorChange = (primaryColor: string, secondaryColor: string) => {
        dispatch(addSideBarBackGround('light-only'));
        document.body.className = 'light-only'
        setColorBackground1(primaryColor);
        setColorBackground2(secondaryColor);
        document.documentElement.style.setProperty("--theme-default", colorBackground1);
        document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
    };

    return (
        <>
            <H6>{LightLayoutTitle}</H6>
            <UL className='layout-grid customizer-color flex-row'>
                {lightColorOptions.map((colorOption, index) => (
                    <LI key={index} className="color-layout" data-attr={colorOption.name} data-primary={colorOption.primary} data-secondary={colorOption.secondary}
                        onClick={() => handleColorChange(colorOption.primary, colorOption.secondary)}>
                        <div />
                    </LI>
                ))}
            </UL>
        </>
    )
}
