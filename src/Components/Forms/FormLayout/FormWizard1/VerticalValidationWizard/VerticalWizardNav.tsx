import React from 'react'
import { Nav, NavLink } from 'reactstrap'
import { H6, P } from '../../../../../AbstractElements'
import { verticalWizardNav } from '../../../../../Data/Forms/FormLayoutData'
import { VerticalWizardNavProps } from '../../../../../Types/FormType'

export default function VerticalWizardNav({ steps, activeCallBack }: VerticalWizardNavProps) {
    return (
        <Nav className="flex-column header-vertical-wizard" id="wizard-tab">
            {verticalWizardNav.map((data) => (
                <NavLink key={data.id} className={steps === data.id ? "active" : ''} onClick={() => activeCallBack(data.id)}>
                    <div className="vertical-wizard">
                        <div className="stroke-icon-wizard">
                            <i className={`fa fa-${data.icon}`}></i>
                        </div>
                        <div className="vertical-wizard-content">
                            <H6>{data.title}</H6>
                            <P>{data.subTitle}</P>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}
