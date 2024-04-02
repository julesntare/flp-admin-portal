import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import FormatedDemo from './FormatedDemo'
import { FormatedLabelTitle } from '../../../../Utils/Constants'

export default function FormatedLabel() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FormatedLabelTitle} />
                <CardBody>
                    <Form className="theme-form range-slider">
                        <FormGroup>
                            <Row className="py-1">
                                <Col md={12}>
                                    <FormatedDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
