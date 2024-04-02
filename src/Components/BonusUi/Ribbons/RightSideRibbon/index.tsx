import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { rightRibbonSubTitle, rightSideData } from '../../../../Data/BonusUiData/RibbonsData'
import { Ribbon } from '../../../../AbstractElements'
import { RightSideRibbonTitle } from '../../../../Utils/Constants'

export default function RightSideRibbon() {
    return (
        <Col sm={12} xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RightSideRibbonTitle} subTitle={rightRibbonSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        {rightSideData && rightSideData.map((item, index) => (
                            <Col xl={4} sm={6} key={index}>
                                <div className={item.classMain}>
                                    <Ribbon className={item.ribbonClass}>{item.ribbonText}</Ribbon>
                                    {item.subText}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
