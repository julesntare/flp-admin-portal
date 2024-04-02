import React from 'react'
import { AddedNewItems } from '../../../../../Utils/Constants'
import { H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../Utils';

export default function Variation2() {
    return (
        <LI className="d-flex">
            <div className="activity-dot-warning" />
            <div className="w-100 ms-3">
                <P className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background txt-dark">{"5th Feb, 2023"}</span>
                    <span>{"Today"}</span>
                </P>
                <H6>{AddedNewItems}<span className="dot-notification" /></H6>
                <span className="f-light">{"Quisque a consequat ante sit amet magna..."}</span>
                <div className="recent-images">
                    <UL className='simple-list flex-row'>
                        {dynamicNumber(3).map((item, index) => (
                            <LI key={index}>
                                <div className="recent-img-wrap">
                                    <Image src={dynamicImage(`dashboard-2/product/${item}.png`)} alt="chair" />
                                </div>
                            </LI>
                        ))}
                    </UL>
                </div>
            </div>
        </LI>
    )
}
