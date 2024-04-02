import React from 'react'
import { translucentToastsData } from '../../../../Data/BonusUiData/ToastsData'
import CommonToast from '../../../../Utils/CommonComponents/CommonBonusUi/CommonToast'

export default function TranslucentToastsList() {
    return translucentToastsData.map((data) => (
        <CommonToast key={data.id} iconColor={data.iconColor} icon='Disc'
            strongText={data.header}
            smallClass={data.timeColor}
            smallText={data.time}
            bodyText={data.text}
        />
    ))
}
