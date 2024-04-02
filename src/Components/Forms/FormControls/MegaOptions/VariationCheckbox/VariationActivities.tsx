import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { VariationActivitiesTitle } from '../../../../../Utils/Constants'
import { activitiesVariationCheckbox } from '../../../../../Data/Forms/FormControlsData'

export default function VariationActivities() {
    
    return (
        <Col xl={4} md={5}>
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <H6 className="sub-title">{VariationActivitiesTitle}</H6>
                {activitiesVariationCheckbox.map((data) => (
                    <div className="payment-wrapper" key={data.id}>
                        <div className="payment-first">
                            <FormGroup className={`checkbox checkbox-${data.color}`} check>
                                <Input id={`check-${data.id}`} type="checkbox" defaultChecked={data.check === 'checked'} />
                                <Label className="mb-0" htmlFor={`check-${data.id}`} check>{data.text}</Label>
                            </FormGroup>
                        </div>
                    </div>
                ))}
            </div>
        </Col>
    )
}
