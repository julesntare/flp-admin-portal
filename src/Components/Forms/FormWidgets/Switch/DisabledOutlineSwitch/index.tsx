import React from 'react'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { defaultTouchspinData, disabledOutlineSwitchSubTitle } from '../../../../../Data/Forms/FormWidgetsData'
import { DisabledOutlineSwitchTitle } from '../../../../../Utils/Constants'

export default function DisabledOutlineSwitch() {
    
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DisabledOutlineSwitchTitle} subTitle={disabledOutlineSwitchSubTitle} />
                <CardBody className="common-flex">
                    {defaultTouchspinData.map((data) => (
                        <div className="d-flex" key={data.id}>
                            <div className="flex-shrink-0 text-end icon-state switch-outline">
                                <Label className="switch mb-0">
                                    <Input type="checkbox" />
                                    <span className={`switch-state bg-${data.color}`}></span>
                                </Label>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
