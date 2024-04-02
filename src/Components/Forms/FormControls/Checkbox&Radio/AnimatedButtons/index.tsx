import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { H6 } from '../../../../../AbstractElements'
import { AnimatedButtonsTitle } from '../../../../../Utils/Constants'
import { animatedButtonsData, animatedButtonsSubTitle } from '../../../../../Data/Forms/FormControlsData'

export default function AnimatedButtons() {
    
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={AnimatedButtonsTitle} subTitle={animatedButtonsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {animatedButtonsData.map((data) => (
                            <Col sm={6} key={data.id}>
                                <div className="card-wrapper border rounded-3 checkbox-checked">
                                    <H6 className="sub-title">{data.title}</H6>
                                    {data.child.map((item) => (
                                        <FormGroup key={item.id} check>
                                            <Input className={`${item.type}_animated`} type={item.type}
                                                defaultChecked={item.check === 'checked'} name={item.type === 'radio' ? item.name : ''} />
                                            <Label className="d-block">{item.text}</Label>
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
