import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Href, LargeButton, MediumButton, SmallButton, VeryLargeButton } from "../../../../Utils/Constants";

export default function LargeDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='info light' size="lg">{LargeButton}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>{SmallButton}</DropdownItem>
                    <DropdownItem href={Href}>{MediumButton}</DropdownItem>
                    <DropdownItem href={Href}>{LargeButton}</DropdownItem>
                    <DropdownItem href={Href} divider></DropdownItem>
                    <DropdownItem href={Href}>{VeryLargeButton}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
