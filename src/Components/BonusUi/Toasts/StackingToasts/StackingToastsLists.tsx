import React from 'react'
import CommonToast from '../../../../Utils/CommonComponents/CommonBonusUi/CommonToast'
import { stackingToastsData } from '../../../../Data/BonusUiData/ToastsData'

export default function StackingToastsLists() {
  return stackingToastsData.map((data) => (
    <CommonToast key={data.id} iconColor={data.iconColor}
      icon='Bell'
      strongText={data.header}
      smallClass='txt-muted' smallText={data.time} bodyText={data.text}
    />
  ))
}
