import React from 'react'
import { H3, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function TaskHeader() {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <Image className="me-3 rounded-circle" src={dynamicImage(`user/user-dp.png`)} alt=""/>
      </div>
      <div className="flex-grow-1">
        <H3 className="f-w-600">{'MARK JENCO'}</H3>
        <P>{'Markjecno@gmail.com'}</P>
      </div>
    </div>
  )
}
