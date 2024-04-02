import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import BasicRangeDemo from './BasicRangeDemo'
import { BasicRangeTitle } from '../../../../Utils/Constants'

export default function BasicRange() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BasicRangeTitle}/>
                <CardBody>
                    <Form className="theme-form range-slider">
                        <FormGroup>
                            <Row className="py-1">
                                <Col md={12}>
                                    <BasicRangeDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
