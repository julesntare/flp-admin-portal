import React from 'react'
import { useDispatch } from 'react-redux';
import { H6, LI, UL } from '../../../../AbstractElements'
import { mixLayoutData } from '../../../../Data/ThemeCustomizerData'
import CommenUL from './Common/CommenUL'
import { addSideBarBackGround } from '../../../../redux-toolkit/reducers/ThemeCustomizerReducer';
import { MixLayoutTitle } from '../../../../Utils/Constants';

export default function MixLayout() {
    const dispatch = useDispatch();
    const handleMixLayout = (data: string) => {
        dispatch(addSideBarBackGround(data));
        document.body.className = data
    };

    return (
        <>
            <H6>{MixLayoutTitle}</H6>
            <UL className='simple-list flex-row layout-grid customizer-mix'>
                {mixLayoutData.map((layout, index) => (
                    <LI key={index} className={`color-layout`} data-attr={layout.value}
                        onClick={() => handleMixLayout(layout.value)}>
                        <div className={`header ${layout.headerClass}`}>
                            <CommenUL />
                        </div>
                        <div className='body'>
                            <UL className='simple-list flex-row'>
                                <LI className={`sidebar ${layout.sidebarClass}`}></LI>
                                <LI className={`body ${layout.bodyClass}`}></LI>
                            </UL>
                        </div>
                    </LI>
                ))}
            </UL>
        </>
    )
}
