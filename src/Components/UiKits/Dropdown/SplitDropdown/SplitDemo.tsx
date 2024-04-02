import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Chart, General, Href, Widgets } from '../../../../Utils/Constants';

export default function SplitDemo() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    
    return (
        <div className='btn-group'>
            <Btn outline color='primary'>{Widgets}</Btn>
            <Dropdown className='separated-btn' isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='primary'><i className="icofont icofont-arrow-down"></i></DropdownToggle>
                <DropdownMenu className="dropdown-content">
                    <DropdownItem href={Href}>{General}</DropdownItem>
                    <DropdownItem href={Href}>{Chart}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
