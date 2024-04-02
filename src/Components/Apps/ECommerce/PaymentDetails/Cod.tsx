import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CodTitle, Submit } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'

export default function Cod() {
    return (
        <Col xl={4} lg={6} className="box-col-33">
            <Card>
                <CommonCardHeader headClass='pb-0' title={CodTitle} />
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
                                    <Input type="number" placeholder="Enter mobile number" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup className="p-r-0">
                                    <Input type="text" placeholder="State" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="text" placeholder="City" />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Input type="textarea" placeholder="Address" />
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
