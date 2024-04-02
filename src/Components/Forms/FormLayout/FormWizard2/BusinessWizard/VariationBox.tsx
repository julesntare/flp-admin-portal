import React from 'react'
import { Input } from 'reactstrap'
import { variationBoxData } from '../../../../../Data/Forms/FormLayoutData'
import { LI, UL } from '../../../../../AbstractElements'

export default function VariationBox() {
    return (
        <div className="variation-box">
            {variationBoxData.map((data, index) => (
                <div className="selection-box" key={index}>
                    <Input type="checkbox" />
                    <div className="custom--mega-checkbox">
                        <UL className="d-flex flex-column simple-list flex-row">
                            <LI>{data.title}</LI>
                            <LI className="txt-primary">{data.details}</LI>
                        </UL>
                    </div>
                </div>
            ))}
        </div>
    )
}
