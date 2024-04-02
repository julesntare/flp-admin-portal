import React from 'react'
import { VerticalWizardNavProps } from '../../../../../Types/FormType'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { customNavData } from '../../../../../Data/Forms/FormLayoutData'
import { H6 } from '../../../../../AbstractElements'

export default function CustomNavComponent({ steps, activeCallBack }: VerticalWizardNavProps) {
    return (
        <Nav className="horizontal-options" pills>
            {customNavData.map((data) => (
                <NavLink key={data.id} className={steps === data.id ? "active" : ''} onClick={() => activeCallBack(data.id)}>
                    <div className="horizontal-wizard">
                        <div className="stroke-icon-wizard">
                            <i className={`fa ${data.icon}`} />
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
