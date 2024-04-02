import React from 'react'
import { profileLikeData } from '../../../../../Data/BonusUiData/TourData'
import { LI, UL } from '../../../../../AbstractElements'
import { Label } from 'reactstrap'
import { Href } from '../../../../../Utils/Constants'

export default function ProfileLike() {
    return (
        <div className="like-comment mt-4 step6">
            <UL className="list-inline simple-list flex-row">
                {profileLikeData && profileLikeData.map((item, index) => (
                    <LI className={item.class} key={index}>
                        <Label className="m-0">
                            <a href={Href}>
                                <i className={`me-2 fa fa-${item.icon}`} />
                            </a>{item.text}
                        </Label>
                    </LI>
                ))}
            </UL>
        </div>
    )
}
