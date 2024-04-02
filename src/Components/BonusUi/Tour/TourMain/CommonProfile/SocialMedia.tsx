import React from 'react'
import { tourSocialData } from '../../../../../Data/BonusUiData/TourData'
import { Link } from 'react-router-dom'
import { LI, UL } from '../../../../../AbstractElements'
import { SocialMediaProp } from '../../../../../Types/BonusUiType'

export default function SocialMedia({ className }: SocialMediaProp) {
    return (
        <div className={`social-media ${className} step4`}>
            <UL className="list-inline simple-list flex-row">
                {tourSocialData && tourSocialData.map((item, index) => (
                    <LI className="list-inline-item" key={index}>
                        <Link to={item.link} target="_blank" rel='noreferrer'>
                            <i className={`fa fa-${item.icon}`} />
                        </Link>
                    </LI>
                ))}
            </UL>
        </div>
    )
}
