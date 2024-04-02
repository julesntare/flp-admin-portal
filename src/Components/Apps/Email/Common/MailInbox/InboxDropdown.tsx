import React, { useState } from 'react'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Action, AnotherAction, Href, More, SomethingElseHere } from '../../../../../Utils/Constants';

export default function InboxDropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Col className="text-end">
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle color='transparent' caret>{More}</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href={Href} >{Action}</DropdownItem>
                    <DropdownItem href={Href} >{AnotherAction}</DropdownItem>
                    <DropdownItem href={Href} >{SomethingElseHere}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Col>
    )
}
