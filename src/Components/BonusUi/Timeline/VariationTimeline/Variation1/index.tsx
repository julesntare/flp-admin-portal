import React from 'react'
import { UpdatedProduct } from '../../../../../Utils/Constants'
import { H6, LI, P } from '../../../../../AbstractElements'

export default function Variation1() {
    return (
        <LI className="d-flex">
            <div className="activity-dot-primary" />
            <div className="w-100 ms-3">
                <P className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background txt-dark">{"8th March, 2022"}</span>
                    <span>{"1 day ago"}</span>
                </P>
                <H6>{UpdatedProduct}<span className="dot-notification" /></H6>
                <P className="f-light">{"Quisque a consequat ante sit amet magna..."}</P>
            </div>
        </LI>
    )
}
