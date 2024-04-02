import React from 'react'
import { Badges, P } from '../../../../../../AbstractElements'
import { SideHeaderProp } from '../../../../../../Types/ChatType'

export default function SideHeader({title}: SideHeaderProp) {
    return (
        <div className="common-space d-flex">
            <P>{title}</P>
            <div className="header-top">
                <Badges color="primary" className="btn f-w-500">
                    <i className="fa fa-plus"></i>
                </Badges>
            </div>
        </div>
    )
}
