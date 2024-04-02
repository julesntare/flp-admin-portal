import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import DraggableDemo from './DraggableDemo'
import { DraggableTitle } from '../../../../Utils/Constants'

export default function Draggable() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DraggableTitle} />
                <CardBody>
                    <Form className="theme-form range-slider">
                        <FormGroup>
                            <Row className="py-1">
                                <Col md={12}>
                                    <DraggableDemo />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
