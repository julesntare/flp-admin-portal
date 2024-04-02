import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Text, TextBody, TextBody2, } from "../../../../Utils/Constants";
import { P } from "../../../../AbstractElements";

export default function DropdownText() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='dark'>{Text}</DropdownToggle>
                <DropdownMenu>
                    <div className="p-4 text-muted form-wrapper">
                        <P>{TextBody}</P>
                        <P className="mb-0">{TextBody2}</P>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
