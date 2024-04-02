import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BecomeMemberTitle, Dollar, EmailAccounts, Maintenance, SignUp, SubDomains } from '../../../../../Utils/Constants'
import { Btn, H3, LI, UL } from '../../../../../AbstractElements'
import { becomeMemberData } from '../../../../../Data/AppsData/EcommerceData/PricingData'

export default function BecomeMember() {
    return (
        <Card>
            <CommonCardHeader headClass='pb-0' title={BecomeMemberTitle} />
            <CardBody className="pricing-content">
                <Row className='pricing-col'>
                    {becomeMemberData.map((data) => (
                        <Col lg={3} sm={6} className='box-col-3' key={data.id}>
                            <div className="pricingtable">
                                <div className="pricingtable-header">
                                    <H3 className="title">{data.title}</H3>
                                </div>
                                <div className="price-value">
                                    <span className="currency">{Dollar}</span>
                                    <span className="amount">{data.amount}</span>
                                    <span className="duration">{"/mo"}</span>
                                </div>
                                <UL className="pricing-content simple-list">
                                    <LI>{data.content}</LI>
                                    <LI>{EmailAccounts}</LI>
                                    <LI>{Maintenance}</LI>
                                    <LI>{SubDomains}</LI>
                                </UL>
                                <div className="pricingtable-signup">
                                    <Btn color="primary" size="lg">
                                        {SignUp}
                                    </Btn>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}
