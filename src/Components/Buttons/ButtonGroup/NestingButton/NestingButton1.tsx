import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { DropdownLink, DropdownText, Href } from '../../../../Utils/Constants'

export default function NestingButton1() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    
    return (
        <div className="m-b-30">
            <ButtonGroup>
                <Btn color="primary"><i className="fa fa-bold"></i></Btn>
                <Btn color="secondary"><i className="fa fa-italic"></i></Btn>
                <ButtonGroup>
                    <Dropdown isOpen={open} toggle={toggle}>
                        <DropdownToggle color="light">{DropdownText}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                            <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                            <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                            <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ButtonGroup>
            </ButtonGroup>
        </div>
    )
}
