import React, { Fragment } from 'react'
import { LI, P } from '../../../../../AbstractElements'
import { Input, Label } from 'reactstrap'
import { variationSwitchesData2 } from '../../../../../Data/Forms/FormWidgetsData'

export default function CheckedFlatSwitch() {
    return (
        <>
            {variationSwitchesData2.map((data) => (
                <Fragment key={data.id}>
                    <LI className="tg-list-item">
                        <div className="d-flex">
                            <div className={`flex-grow-1 text-end ${data.iconClass ? data.iconClass : ""}`}>
                                <Label className="switch mb-0 square-checked">
                                    <Input type="checkbox" defaultChecked />
                                    <span className={`switch-state bg-${data.color} rounded-2`}></span>
                                </Label>
                            </div>
                        </div>
                    </LI>
                    <LI><P>{data.text}</P></LI>
                </Fragment>
            ))}
        </>
    )
}
