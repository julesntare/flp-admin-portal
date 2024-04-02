import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Dark, Href, Light, Lighter, Primary } from '../../../../Utils/Constants';

export default function RoundedDemo() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Dropdown isOpen={open} toggle={toggle} direction='down'>
            <DropdownToggle color='primary rounded-pill'>{Primary}</DropdownToggle>
            <DropdownMenu className="dropdown-block">
                <DropdownItem href={Href}>{Dark}</DropdownItem>
                <DropdownItem href={Href}>{Light}</DropdownItem>
                <DropdownItem href={Href}>{Lighter}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
