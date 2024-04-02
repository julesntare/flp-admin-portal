import { useState } from "react";
import { DefaultCheckbox, DefaultRadio, Inputs } from "../../../../Utils/Constants";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText } from "reactstrap";

export default function DropdownInputs() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Dropdown isOpen={open} toggle={toggle} direction='down'>
            <DropdownToggle color='warning'>{Inputs}</DropdownToggle>
            <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                <DropdownItem>
                    <InputGroup className='rounded-0 border-0 shadow-none'>
                        <InputGroupText>
                            <Input className='mt-0' type='checkbox' />
                        </InputGroupText>
                        <span>{DefaultCheckbox}</span>
                    </InputGroup>
                    <InputGroup className='rounded-0 border-0 shadow-none'>
                        <InputGroupText>
                            <Input className='mt-0' type='radio' />
                            <span>{DefaultRadio}</span>
                        </InputGroupText>
                    </InputGroup>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
