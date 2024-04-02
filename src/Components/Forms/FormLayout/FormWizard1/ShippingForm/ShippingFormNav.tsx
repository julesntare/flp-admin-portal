import React from 'react'
import { VerticalWizardNavProps } from '../../../../../Types/FormType';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { shippingFormNav } from '../../../../../Data/Forms/FormLayoutData';
import { H3 } from '../../../../../AbstractElements';

export default function ShippingFormNav({ activeCallBack, steps }: VerticalWizardNavProps) {
    return (
        <Nav className="horizontal-options shipping-options" pills>
            {shippingFormNav.map((data, index) => (
                <NavItem key={index}>
                    <NavLink key={data.id} className={`b-r-0 ${steps === data.id ? "active" : ''}`} onClick={() => activeCallBack(data.id)}>
                        <div className="cart-options">
                            <div className="stroke-icon-wizard">
                                <i className={`fa ${data.icon}`} />
                            </div>
                            <div className="cart-options-content">
                                <H3>{data.title}</H3>
                            </div>
                        </div>
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    );
}
