import React from 'react'
import { ShippingInformationProps } from '../../../../../Types/FormType';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, P } from '../../../../../AbstractElements';
import { ProceedToNext } from '../../../../../Utils/Constants';
import { shippingMethodsData } from '../../../../../Data/Forms/FormLayoutData';

export default function ShippingMethods({ radioBoxValues, updateFormData, handleNextButton, }: ShippingInformationProps) {
    const { shippingMethod } = radioBoxValues;
    return (
        <Row className="shipping-method g-3">
            {shippingMethodsData.map((data, index) => (
                <Col sm={6} key={index}>
                    <div className="card-wrapper border rounded-3 h-100 light-card">
                        <FormGroup check className="radio radio-primary">
                            <Input id={data.value} type="radio" name="shippingMethod" value={data.value} checked={shippingMethod === data.value} onChange={updateFormData} />
                            <Label className="mb-0" htmlFor={data.value} check>{data.label}</Label>
                        </FormGroup>
                        <P>{data.details}</P>
                    </div>
                </Col>
            ))}
            <Col xs={12} className="text-end">
                <Btn onClick={handleNextButton} color="primary">{ProceedToNext}
                    <i className="fa fa-truck proceed-next pe-2" />
                </Btn>
            </Col>
        </Row>
    )
}
