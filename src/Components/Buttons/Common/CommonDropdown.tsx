import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownLink, DropdownText } from '../../../Utils/Constants';
import { CommonDropdownType } from '../../../Types/ButtonsType';

export default function CommonDropdown({color,className}:CommonDropdownType) {
    
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Dropdown isOpen={open} toggle={toggle}>
            <DropdownToggle color={color} caret className={className ? className : ""}>
                {DropdownText}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>{DropdownLink}</DropdownItem>
                <DropdownItem>{DropdownLink}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
