import { Nav, NavItem, NavLink } from "reactstrap";
import { Href, IotDeveloper, UXDesigner, WebDesigner } from "../../../../Utils/Constants";

type propsType = {
    basicTab: string;
    setBasicTab: (data: string) => void;
}

export default function JustifyNav({ basicTab, setBasicTab }: propsType) {
    return (
        <Nav tabs className='nav-warning border-0' pills>
            <NavItem>
                <NavLink href={Href} className={`${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{WebDesigner}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{UXDesigner}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{IotDeveloper}</NavLink>
            </NavItem>
        </Nav>
    )
}
