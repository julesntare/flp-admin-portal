import { Fragment, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { BasicDropdownType } from "../../../../Types/UiKitsType";
import { Href } from "../../../../Utils/Constants";

type propsType = {
    item: BasicDropdownType
}

export default function DividerBody({ item }: propsType) {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color={item.class}>{item.text}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    {item.menulist && item.menulist.map((item, index) => (
                        <Fragment key={index}>
                            {item !== '' ?
                                (<DropdownItem href={Href}>{item}</DropdownItem>) :
                                (<DropdownItem href={Href} divider></DropdownItem>)
                            }
                        </Fragment>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}