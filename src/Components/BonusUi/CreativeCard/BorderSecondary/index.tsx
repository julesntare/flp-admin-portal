import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { borderPrimarySubTitle, borderSecondaryData } from '../../../../Data/BonusUiData/BasicCardData'
import { BorderSecondaryTitle } from '../../../../Utils/Constants'
import { Badges, LI, OL } from '../../../../AbstractElements'

export default function BorderSecondary() {
    return (
        <Col xs={4} xxl={4}>
            <Card className='height-equal'>
                <CommonCardHeader title={BorderSecondaryTitle} subTitle={borderPrimarySubTitle} headClass='pb-0 border-l-secondary border-2' />
                <CardBody>
                    <OL className="list-group list-group-numbered scroll-rtl">
                        {borderSecondaryData && borderSecondaryData.map((item, index) => (
                            <LI className="d-flex align-items-start flex-wrap" key={index}>
                                <div className="ms-2 me-auto">{item.text}</div>
                                <Badges color={item.class} className='rounded-pill p-2'>{item.text2}</Badges>
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}