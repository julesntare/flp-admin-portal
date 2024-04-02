import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { EmiTitle, Submit } from '../../../../Utils/Constants'
import { bankName, paymentOption, selectCard, selectDuration } from '../../../../Data/AppsData/EcommerceData/ProductData'
import { Btn, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function Emi() {
    return (
        <Col xl={4} lg={6} className="box-col-33">
            <Card>
                <CommonCardHeader headClass='pb-0' title={EmiTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="text" placeholder="First Name" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="text" placeholder="Last Name" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="text" placeholder="Pincode" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="select" size={1} >
                                        {bankName.map((item, i) => (
                                            <option key={i}>{item}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="select" size={1} >
                                        {selectCard.map((item, i) => (
                                            <option key={i}>{item}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="select" size={1} >
                                        {selectDuration.map((item, i) => (
                                            <option key={i}>{item}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <UL className="payment-opt simple-list flex-row">
                                        {paymentOption.map((item, index) => (
                                            <LI key={index}><Image src={dynamicImage(`ecommerce/${item}.png`)} alt="" /></LI>
                                        ))}
                                    </UL>
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
