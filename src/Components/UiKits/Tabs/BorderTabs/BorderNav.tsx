import { Nav, NavItem, NavLink } from "reactstrap";
import { Contact, Home, Href, Inbox } from "../../../../Utils/Constants";

type propsType = {
    basicTab: string;
    setBasicTab: (data: string) => void;
}

export default function BorderNav({ basicTab, setBasicTab }: propsType) {
    return (
        <Nav tabs className='border-tab nav-info mb-0'>
            <NavItem>
                <NavLink href={Href} className={`nav-border txt-info tab-info ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}><i className="icofont icofont-ui-home" />{Home}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`nav-border txt-info tab-info ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}><i className="icofont icofont-ui-message" />{Inbox}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`nav-border txt-info tab-info ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}><i className="icofont icofont-man-in-glasses" />{Contact}</NavLink>
            </NavItem>
        </Nav>
    )
}
