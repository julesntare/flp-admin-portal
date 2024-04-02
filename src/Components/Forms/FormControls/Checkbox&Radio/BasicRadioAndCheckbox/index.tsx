import React from 'react'
import { Card, CardBody, Col, Row, FormGroup, Input, Label } from 'reactstrap'
import { BasicRadioAndCheckboxTitle } from '../../../../../Utils/Constants'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { basicRadioAndCheckBoxSubTitle } from '../../../../../Data/Forms/FormControlsData'
import { H6 } from '../../../../../AbstractElements'
import { basicCheckboxRadioData } from '../../../../../Data/Forms/FormControlsData'

export default function BasicRadioAndCheckbox() {
    
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={BasicRadioAndCheckboxTitle} subTitle={basicRadioAndCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {basicCheckboxRadioData.map((data) => (
                            <Col md={12} key={data.id}>
                                <div className="card-wrapper border rounded-3 checkbox-checked">
                                    <H6 className="sub-title">{data.title}</H6>
                                    <div className="form-check-size">
                                        {data.child.map((item) => (
                                            <FormGroup key={item.id} className={item.formGroupClass} check inline>
                                                <Input id={`inline-${item.id}`} type={item.type} defaultChecked={item.check === 'checked'}
                                                    name={item.type === 'radio' ? item.name : ''} />
                                                <Label htmlFor={`inline-${item.id}`} check> {item.text}</Label>
                                            </FormGroup>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
