import React from 'react'
import { H3, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { MarkJecno } from '../../../../Utils/Constants'

export default function ProfileHeader() {
    return (
        <div className="d-flex align-items-center">
            <div className="media-size-email">
                <Image className="me-3 rounded-circle" src={dynamicImage(`user/user-dp.png`)} alt="" />
            </div>
            <div className="flex-grow-1">
                <H3>{MarkJecno}</H3>
                <P>{'Markjecno@gmail.com'}</P>
            </div>
        </div>
    )
}
