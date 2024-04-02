import React from 'react'
import { TelloJust } from '../../../../../Utils/Constants'
import { H6, LI, P } from '../../../../../AbstractElements'

export default function Variation3() {
    return (
        <LI className="d-flex pb-0">
            <div className="activity-dot-secondary" />
            <div className="w-100 ms-3">
                <P className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background txt-dark">{"20th Sep, 2022"}</span>
                    <span>{"12:00 PM"}</span>
                </P>
                <H6>{TelloJust}<span className="dot-notification" /></H6>
                <P>{"Quisque a consequat ante sit amet magna..."}</P>
            </div>
        </LI>
    )
}
