import React, { Fragment } from 'react'
import CommonButtons from '../Common/CommonButtons'
import { activeButtonsData, boldBorderOutlineButtonsData, defaultButtonsData, gradientButtonsData, outlineButtonsData, sizingButtonsData } from '../../../Data/ButtonsData/DefaultStyleData'
import { ActiveButtonSubTitle, ActiveButtonsTitle, BoldBorderOutlineButtonSubTitle, BoldBorderOutlineButtonsTitle, DefaultButtonText, DefaultButtonTitle, FlatButtonSubTitle, FlatButtonTitle, GradienButtonsSubTitle, GradienButtonsTitle, OutlineButtonSubTitle, OutlineButtonsTitle, RaisedButtonSubTitle, RaisedButtonTitle, SizingButtonSubTitle, SizingButtonsTitle } from '../../../Utils/Constants'

export default function AllButtonLists() {
    
    return (
        <Fragment>
            <CommonButtons commonButtonsData={defaultButtonsData} title={DefaultButtonTitle} subTitle={DefaultButtonText} />
            <CommonButtons className='btn-square' commonButtonsData={defaultButtonsData} title={FlatButtonTitle} subTitle={FlatButtonSubTitle} />
            <CommonButtons raised className='btn-pill' commonButtonsData={defaultButtonsData} title={RaisedButtonTitle} subTitle={RaisedButtonSubTitle} />
            <CommonButtons commonButtonsData={sizingButtonsData} title={SizingButtonsTitle} subTitle={SizingButtonSubTitle} />
            <CommonButtons commonButtonsData={activeButtonsData} title={ActiveButtonsTitle} subTitle={ActiveButtonSubTitle} />
            <CommonButtons commonButtonsData={outlineButtonsData} title={OutlineButtonsTitle} subTitle={OutlineButtonSubTitle} />
            <CommonButtons commonButtonsData={boldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsTitle} subTitle={BoldBorderOutlineButtonSubTitle} />
            <CommonButtons commonButtonsData={gradientButtonsData} title={GradienButtonsTitle} subTitle={GradienButtonsSubTitle} />
        </Fragment>
    )
}
