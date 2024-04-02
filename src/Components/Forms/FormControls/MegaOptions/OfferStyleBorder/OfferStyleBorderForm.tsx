import React from 'react'
import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { offerStyleBorderFormData } from '../../../../../Data/Forms/FormControlsData'
import { dynamicImage } from '../../../../../Utils'

export default function OfferStyleBorderForm() {
    
    return (
        <Form className="mega-inline offer-style">
            <Row className="flex-column">
                {offerStyleBorderFormData.map((data) => (
                    <Col xs={12} key={data.id}>
                        <Card>
                            <div className="d-flex p-20">
                                <FormGroup className={`checkbox checkbox-${data.color}`} check>
                                    <Input id={`checkbox-${data.id}`} type="checkbox" defaultChecked={data.check === 'checked'} />
                                    <Label className="my-0" htmlFor={`checkbox-${data.id}`} check>
                                        <span className="flex-grow-1">
                                            <span className="d-flex list-behavior-1">
                                                <span className="flex-shrink-0">
                                                    <Image className="tab-img img-fluid" src={dynamicImage(`email-template/${data.image}`)} alt="image" />
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="mb-0">{data.spanText}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </Label>
                                </FormGroup>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Form>
    )
}
