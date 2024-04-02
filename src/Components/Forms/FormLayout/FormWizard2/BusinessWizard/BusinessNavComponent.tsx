import React from 'react'
import { VerticalWizardNavProps } from '../../../../../Types/FormType'
import { Nav, NavLink } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { businessNavData } from '../../../../../Data/Forms/FormLayoutData'

export default function BusinessNavComponent({ steps, activeCallBack }: VerticalWizardNavProps) {
    return (
        <Nav className="horizontal-options" pills>
            {businessNavData.map((data) => (
                <NavLink key={data.id} className={steps === data.id ? "active" : ''} onClick={() => activeCallBack(data.id)}>
                    <div className="horizontal-wizard">
                        <div className="stroke-icon-wizard">
                            <span>{data.id}</span>
                        </div>
                        <div className="horizontal-wizard-content">
                            <H6>{data.title}</H6>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}
