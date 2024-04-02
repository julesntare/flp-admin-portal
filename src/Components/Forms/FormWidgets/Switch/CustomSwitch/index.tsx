import React from 'react'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomSwitchTitle } from '../../../../../Utils/Constants'
import { Card, CardBody, Col, FormGroup, Input, Row } from 'reactstrap'
import { customSwitchData, customSwitchSubTitle } from '../../../../../Data/Forms/FormWidgetsData'

export default function CustomSwitch() {
    
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomSwitchTitle} subTitle={customSwitchSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {customSwitchData.map((data) => (
                            <Col md={4} key={data.id} className={data.colClass ? data.colClass : ""}>
                                <div className={`card-wrapper border rounded-3 ${data.cardClass ? data.cardClass : ""}`}>
                                    <div className={`form-check-size ${data.formsize ? data.formsize : ""}`}>
                                        {data.child.map((item) => (
                                            <FormGroup key={item.id} check switch inline>
                                                <Input className={`switch-${item.color} check-size`} type="checkbox" disabled={item.disabled === "disabled"}
                                                    defaultChecked />
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
