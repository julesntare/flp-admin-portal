import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultSwitchesTitle } from '../../../../../Utils/Constants'
import { defaultSwitchesData, defaultSwitchesSubTitle } from '../../../../../Data/Forms/FormControlsData'

export default function DefaultSwitches() {
    
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultSwitchesTitle} subTitle={defaultSwitchesSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {defaultSwitchesData.map((data) => (
                            <Col md={6} xl={4} key={data.id}>
                                <div className="card-wrapper border rounded-3 rtl-input checkbox-checked">
                                    <H6 className="sub-title">{data.title}</H6>
                                    {data.child.map((item) => (
                                        <FormGroup key={item.id} className={item.groupClass ? item.groupClass : ''} check switch>
                                            <Input id={`switch-${item.id}`} type="checkbox" role="switch" defaultChecked={item.check === 'checked'} disabled={item.disabled === 'disabled'} />
                                            <Label htmlFor={`switch-${item.id}`} check>{item.labelText}</Label>
                                        </FormGroup>
                                    ))}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
