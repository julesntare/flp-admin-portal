import React from 'react'
import { useDispatch } from 'react-redux';
import { Badges, H6, LI, UL } from '../../../../AbstractElements'
import { iconTypes } from '../../../../Data/ThemeCustomizerData'
import CommenUL from './Common/CommenUL'
import ConfigDB from '../../../../Config/ThemeConfig';
import { addSidebarIconType } from '../../../../redux-toolkit/reducers/ThemeCustomizerReducer';
import { SidebarIconTitle } from '../../../../Utils/Constants';

export default function SideBarIconType() {
    const sideBarIconType = ConfigDB.settings.sidebar.iconType;
    const dispatch = useDispatch();
    const handleSideBarIconType = (type: string) => {
        dispatch(addSidebarIconType(type));
    };
    return (
        <>
            <H6>{SidebarIconTitle}</H6>
            <UL className='sidebar-setting layout-grid flex-row simple-list'>
                {iconTypes.map(({ type, label }) => (
                    <LI key={type} data-attr={type} className={`${type === 'stroke-svg' ? 'normal-sidebar' : ''} ${sideBarIconType === type ? 'active' : ''}`}
                        onClick={() => handleSideBarIconType(type)}>
                        <div className='header bg-light'>
                            <CommenUL />
                        </div>
                        <div className='body bg-light'>
                            <Badges color='primary'>{label}</Badges>
                        </div>
                    </LI>
                ))}
            </UL>
        </>
    )
}
