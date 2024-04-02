import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import DisabledDemo from './DisabledDemo'
import { DisabledSliderTitle } from '../../../../Utils/Constants'

export default function DisabledSlider() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DisabledSliderTitle}/>
                <CardBody>
                    <Form className="theme-form range-slider">
                        <FormGroup>
                            <Row className="py-1">
                                <Col md={12}>
                                    <DisabledDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
