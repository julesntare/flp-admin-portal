import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { ExtraExtraSmall, ExtraSmallButton, Href, SmallButton, VerySmallButton } from "../../../../Utils/Constants";

export default function SmallDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='dark light' size="sm">{SmallButton}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>{SmallButton}</DropdownItem>
                    <DropdownItem href={Href}>{VerySmallButton}</DropdownItem>
                    <DropdownItem href={Href}>{ExtraSmallButton}</DropdownItem>
                    <DropdownItem href={Href} divider></DropdownItem>
                    <DropdownItem href={Href}>{ExtraExtraSmall}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
