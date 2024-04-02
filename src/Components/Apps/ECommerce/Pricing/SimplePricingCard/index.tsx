import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Dollar, Plan, Purchase, SimplePricingTitle } from '../../../../../Utils/Constants'
import { simplePricingData } from '../../../../../Data/AppsData/EcommerceData/PricingData'
import { Btn, H2, H3 } from '../../../../../AbstractElements'

export default function SimplePricingCard() {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={SimplePricingTitle} />
            <CardBody className="pricing-content">
                <Row className="g-sm-4 g-3">
                    {simplePricingData.map((data) => (
                        <Col lg={3} sm={6} className="box-col-3" key={data.id}>
                            <Card className="text-center pricing-simple">
                                <CardBody>
                                    <H3>{data.title}</H3>
                                    <H2>{Dollar}{data.amount}</H2>
                                    <H3 className="mb-0">{data.title} {Plan}</H3>
                                </CardBody>
                                <Btn size="lg" color="primary" className="btn-block">
                                    {Purchase}
                                </Btn>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}
