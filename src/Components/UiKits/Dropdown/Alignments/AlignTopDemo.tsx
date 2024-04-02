import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Becareful, Beware, Href, Notifications, WarningTop } from '../../../../Utils/Constants';

export default function AlignTopDemo() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group dropup'>
            <Dropdown isOpen={open} toggle={toggle} direction='up'>
                <DropdownToggle color='warning' >{WarningTop}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>{Becareful}</DropdownItem>
                    <DropdownItem href={Href}>{Notifications}</DropdownItem>
                    <DropdownItem href={Href}>{Beware}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
