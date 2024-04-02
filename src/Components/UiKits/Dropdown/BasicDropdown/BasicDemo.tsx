import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Crypto, Dashboard, Ecommerce, Href, Project } from '../../../../Utils/Constants'

export default function BasicDemo() {
    const [open, setOpen] = useState<boolean>(false)
    const toggle = () => { setOpen(!open) }
    return (
        <div className="btn-group">
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='primary'>{Dashboard}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>{Project}</DropdownItem>
                    <DropdownItem href={Href}>{Ecommerce}</DropdownItem>
                    <DropdownItem href={Href}>{Crypto}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
