import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DebitCardTitle, ExpirationDate, Submit } from '../../../../Utils/Constants'
import { selectMonth, selectYear } from '../../../../Data/AppsData/EcommerceData/ProductData'
import { Btn } from '../../../../AbstractElements'

export default function DebitCard() {
    return (
        <Col xl={4} lg={6} className="box-col-33 debit-card">
            <Card>
                <CommonCardHeader headClass='pb-0' title={DebitCardTitle} />
                <CardBody>
                    <Form className="theme-form e-commerce-form">
                        <Row>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="text" placeholder="Full name here" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="text" placeholder="Card number" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="text" placeholder="CVV number" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="text" placeholder="CVC" />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <Label className="col-form-label p-b-20">{ExpirationDate}</Label>
                            </Col>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="select" size={1}>
                                        {selectMonth.map((months, i) => (
                                            <option key={i}>{months}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="select" size={1}>
                                        {selectYear.map((year, i) => (
                                            <option key={i}>{year}</option>
                                        ))}
                                    </Input>
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
