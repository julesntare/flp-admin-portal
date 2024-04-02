import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Ribbon } from '../../../../AbstractElements'
import { leftRibbonSubTitle, leftSideData } from '../../../../Data/BonusUiData/RibbonsData'
import { LeftSideRibbonsTitle } from '../../../../Utils/Constants'

export default function LeftSideRibbons() {
    return (
        <Col sm={12} xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={LeftSideRibbonsTitle} subTitle={leftRibbonSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {leftSideData && leftSideData.map((item, index) => (
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
