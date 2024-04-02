import React from 'react'
import { Grid } from 'react-feather'
import { Btn, H5, H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { Free, PricingPlanText, Selected, TrialVersion } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function PricingPlan() {
    return (
        <UL className='simple-list'>
            <LI>
                <Btn color='primary' outline><Grid /> {PricingPlanText}</Btn>
            </LI>
            <LI>
                <div className="pricing-plan">
                    <H6>{TrialVersion}</H6>
                    <H5>{Free}</H5>
                    <P>{"100 GB Space"}</P>
                    <Btn size='xs' color='primary' outline>{Selected}</Btn>
                    <Image className="bg-img" src={dynamicImage(`dashboard/folder.png`)} alt="" />
                </div>
            </LI>
        </UL>
    )
}
