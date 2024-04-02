import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { VariationTimelineTitle } from '../../../../Utils/Constants'
import { variationTimelineSubTitle } from '../../../../Data/BonusUiData/TimelineData'
import { UL } from '../../../../AbstractElements'
import Variation1 from './Variation1'
import Variation2 from './Variation2'
import Variation3 from './Variation3'

export default function VariationTimeline() {
    return (
        <Col xxl={4} xl={5} className='notification box-col-12'>
            <Card>
                <CommonCardHeader title={VariationTimelineTitle} subTitle={variationTimelineSubTitle} />
                <CardBody className='dark-timeline'>
                    <UL className='simple-list'>
                        <Variation1/>
                        <Variation2/>
                        <Variation3/>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
