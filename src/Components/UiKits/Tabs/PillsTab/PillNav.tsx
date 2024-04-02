import { Nav, NavItem, NavLink } from "reactstrap";
import { AboutUs, Blog, ContactUs, Href } from "../../../../Utils/Constants";

type propsType = {
    basicTab: string;
    setBasicTab: (data: string) => void;
}

export default function PillNav({ basicTab, setBasicTab }: propsType) {
    return (
        <Nav tabs className='nav-primary border-0' pills>
            <NavItem>
                <NavLink href={Href} className={`f-w-600 ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{AboutUs}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`f-w-600 ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{ContactUs}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`f-w-600 ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{Blog}</NavLink>
            </NavItem>
        </Nav>
    )
}

