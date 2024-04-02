import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NagativeValueTitle } from '../../../../Utils/Constants'
import NagativeValueDemo from './NagativeValueDemo'

export default function NagativeValue() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={NagativeValueTitle} />
                <CardBody>
                    <Form className="theme-form range-slider">
                        <FormGroup>
                            <Row className="py-1">
                                <Col md={12}>
                                    <NagativeValueDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
