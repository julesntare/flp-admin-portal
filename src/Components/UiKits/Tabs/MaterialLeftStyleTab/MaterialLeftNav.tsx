import { Nav, NavLink } from "reactstrap";
import { Home, Href, Inbox, Profile, Settings } from "../../../../Utils/Constants";

type propsType = {
    basicTab: string;
    setBasicTab: (data: string) => void;
}

export default function MaterialLeftNav({ basicTab, setBasicTab }: propsType) {
    return (
        <div className='d-flex'>
            <Nav className='flex-column nav-secondary nav-left border-tab border-0'>
                <NavLink href={Href} className={`nav-effect f-w-600 ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{Home}</NavLink>
                <NavLink href={Href} className={`nav-effect f-w-600 ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{Profile}</NavLink>
                <NavLink href={Href} className={`nav-effect f-w-600 ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{Inbox}</NavLink>
                <NavLink href={Href} className={`nav-effect f-w-600 pb-0 ${basicTab === '4' ? 'active' : ''}`} onClick={() => setBasicTab('4')}>{Settings}</NavLink>
            </Nav>
        </div>
    )
}
