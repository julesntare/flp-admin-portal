import React, { Fragment } from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { inlineInputTypesData } from '../../../../../Data/Forms/FormControlsData'

export default function InlineCheckboxRadio() {
    
    return (
        <Fragment>
            {inlineInputTypesData.map((data) => (
                <Col md={6} xl={4} key={data.id}>
                    <div className="card-wrapper border rounded-3 checkbox-checked">
                        <H6 className="sub-title">{data.title}</H6>
                        <div className="form-check-size rtl-input">
                            {data.child.map((item) => (
                                <FormGroup key={item.id} check inline>
                                    <Input className="me-2" id={`inline${item.id}`} type={item.type}
                                        name={item.type === 'radio' ? item.name : ''}
                                        disabled={item.disabled === 'disabled'}
                                        defaultChecked={item.check === 'checked'}
                                    />
                                    <Label htmlFor={`inline${item.id}`} check>
                                        {item.text}
                                    </Label>
                                </FormGroup>
                            ))}
                        </div>
                    </div>
                </Col>
            ))}
        </Fragment>
    )
}
