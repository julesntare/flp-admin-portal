import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { hoverTimelineSubTitle } from '../../../../Data/BonusUiData/TimelineData'
import { HoverTimelineTitle } from '../../../../Utils/Constants'
import { UL } from '../../../../AbstractElements'
import HoverAnnualFunction from './HoverAnnualFunction'
import HoverFresherInterview from './HoverFresherInterview'
import HoverMeetup from './HoverMeetup'

export default function HoverTimeline() {
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader title={HoverTimelineTitle} subTitle={hoverTimelineSubTitle} />
                <CardBody className='dark-timeline'>
                    <UL className="square-timeline simple-list">
                        <HoverAnnualFunction/>
                        <HoverFresherInterview/>
                        <HoverMeetup/>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
