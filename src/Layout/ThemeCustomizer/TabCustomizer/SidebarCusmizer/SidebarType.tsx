import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { H6, LI, UL } from '../../../../AbstractElements'
import CommenUL from './Common/CommenUL'
import { addSidebarTypes } from '../../../../redux-toolkit/reducers/ThemeCustomizerReducer';
import { RootState } from '../../../../redux-toolkit/store';
import { SidebarTypeTitle } from '../../../../Utils/Constants';

export default function SidebarType() {
    const { sidebar_types } = useSelector((state: RootState) => state.themeCustomizer)
    const dispatch = useDispatch();
    const handleSidebarType = (type: string) => {
        dispatch(addSidebarTypes(type));

    };
    return (
        <>
            <H6>{SidebarTypeTitle}</H6>
            <UL className='sidebar-type layout-grid simple-list flex-row'>
                <LI data-attr="normal-sidebar" className={sidebar_types === 'horizontal-wrapper' ? 'active' : ''} onClick={() => handleSidebarType('horizontal-wrapper')}>
                    <div className='header bg-light'>
                        <CommenUL />
                    </div>
                    <div className='body'>
                        <UL className='simple-list'>
                            <LI className='bg-dark sidebar'></LI>
                            <LI className='bg-light body'></LI>
                        </UL>
                    </div>
                </LI>
                <LI data-attr="compact-sidebar" className={sidebar_types === 'compact-wrapper' ? 'active' : ''} onClick={() => handleSidebarType('compact-wrapper')}>
                    <div className='header bg-light'>
                        <CommenUL />
                    </div>
                    <div className='body'>
                        <UL className='simple-list flex-row'>
                            <LI className='bg-dark sidebar compact'></LI>
                            <LI className='bg-light body'></LI>
                        </UL>
                    </div>
                </LI>
            </UL>
        </>
    )
}
