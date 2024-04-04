import React from 'react'
import { Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils';

export default function ActivityLine() {
    const imageNumbers = [5, 6, 3];
    return (
        <LI className="mt-0 d-flex">
            <div className="activity-line"></div>
            <Image src={dynamicImage(`dashboard-2/user/5.png`)} alt="" />
            <div className="ms-2"><span>{'2hrs Ago'}</span>
                <P>{"Today, I'm very happy about myself, because I realized my dreams."}</P>
                <div className="recent-images">
                    <UL className='simple-list flex-row'>
                        {imageNumbers.map((item, index) => (
                            <LI key={index}>
                                <div className="recent-img-wrap">
                                    <Image src={dynamicImage(`dashboard-2/product/${item}.png`)} alt="" />
                                </div>
                            </LI>
                        ))}
                    </UL>
                </div>
            </div>
        </LI>
    )
}
