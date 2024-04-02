import React from 'react'
import { H5, Image, P } from '../../../../../AbstractElements'
import { Href, OrderConfirmed, OrderID } from '../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../Utils'

export default function FinishForm() {
    return (
        <div className="order-confirm">
            <Image src={dynamicImage(`gif/dashboard-8/successful.gif`)} alt="popper" />
            <H5>{OrderConfirmed}</H5>
            <P className="mb-0">{"An email with your orders specifics will be sent to you as order confirmation."}</P>
            <P className="text-center f-w-500 mt-2">
                {OrderID}:
                <a className="text-decoration-underline" href={Href}>
                    {'GE34598'}
                </a>
            </P>
        </div>
    )
}
