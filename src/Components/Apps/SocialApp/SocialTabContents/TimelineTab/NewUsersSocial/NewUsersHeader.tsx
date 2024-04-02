import React from 'react'
import { MoreVertical } from 'react-feather'
import { H3, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import { Elana } from '../../../../../../Utils/Constants'

export default function NewUsersHeader() {
    return (
        <div className="new-users-social">
            <div className="d-flex">
                <Image className="rounded-circle image-radius m-r-15" src={dynamicImage(`user/1.jpg`)} alt="" />
                <div className="flex-grow-1">
                    <H3 className="mb-0 f-w-700">{Elana}</H3>
                    <P>{'January, 12,2019'}</P>
                </div>
                <span className="pull-right mt-0"><MoreVertical /></span>
            </div>
        </div>
    )
}
