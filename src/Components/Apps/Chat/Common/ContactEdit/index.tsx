import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { ContactEditProp } from '../../../../../Types/ChatType';

export default function ContactEdit({divClass}: ContactEditProp) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className={`contact-edit ${divClass ? divClass : ''}`}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="transparent">
                    <SvgIcon iconId='menubar' />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>{'View details'}</DropdownItem>
                    <DropdownItem>{'Send messages'}</DropdownItem>
                    <DropdownItem>{'Add to favorites'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
