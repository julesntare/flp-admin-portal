import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NetBankingTitle, Submit } from '../../../../Utils/Constants'
import { bankName } from '../../../../Data/AppsData/EcommerceData/ProductData'
import { Btn } from '../../../../AbstractElements'

export default function NetBanking() {
    return (
        <Col xl={4} lg={6} className="box-col-33">
            <Card>
                <CommonCardHeader headClass='pb-0' title={NetBankingTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="text" placeholder="AC Holder name" />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="text" placeholder="Account number" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="select" size={1} >
                                        {bankName.map((item, i) => (
                                            <option key={i}>{item}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="text" placeholder="ICFC code" />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="number" placeholder="Enter mobile number" />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="text" placeholder="Other Details" />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <Btn color='primary' className="btn-block">{Submit}</Btn>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
