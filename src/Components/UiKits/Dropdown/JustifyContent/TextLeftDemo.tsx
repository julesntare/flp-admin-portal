import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Hello, HowAreYou, Href, TextLeft, WhatYouDoing } from "../../../../Utils/Constants";

export default function TextLeftDemo() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='primary'>{TextLeft}</DropdownToggle>
                <DropdownMenu className="dropdown-block text-start">
                    <DropdownItem href={Href}>{Hello}</DropdownItem>
                    <DropdownItem href={Href}>{HowAreYou}</DropdownItem>
                    <DropdownItem href={Href}>{WhatYouDoing}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
