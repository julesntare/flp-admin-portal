import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { iconsUncheckedBordersSwitchData } from '../../../../../Data/Forms/FormWidgetsData'

export default function IconUncheckedBorderSwitch() {
    return (
        <>
            {iconsUncheckedBordersSwitchData.map((data) => (
                <Col xl={4} className={data.colClass ? data.colClass : ""} key={data.id}>
                    <Card className="height-equal">
                        <CommonCardHeader headClass='pb-0' title={data.title} subTitle={data.subTitle} />
                        <CardBody className="common-flex flex-column switch-wrapper">
                            {data.child.map((item) => (
                                <div className="d-flex" key={item.id}>
                                    <div className={`flex-shrink-0 text-end ${item.mediaBodyClass ? item.mediaBodyClass : ''}`}>
                                        <Label className="switch mb-0">
                                            <Input type="checkbox" defaultChecked />
                                            <span className={`switch-state bg-${item.color}`}></span>
                                        </Label>
                                    </div>
                                    <Label className="col-form-label m-l-10">{item.labelText}</Label>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
