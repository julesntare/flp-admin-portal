import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FormatedLabelTitle } from '../../../../Utils/Constants'
import FormatedDemo2 from './FormatedDemo2'

export default function FormatedLabel2() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FormatedLabelTitle} />
                <CardBody>
                    <Form className="theme-form range-slider">
                        <FormGroup>
                            <Row className="py-1">
                                <Col md={12}>
                                    <FormatedDemo2 />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
