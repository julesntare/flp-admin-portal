import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { useState } from "react";
import { DarkDropdownTitle, DarkMoon, DarkNight, DarkOwl, Href, NightFall } from "../../../../Utils/Constants";
import { darkDropdownSubTitle } from "../../../../Data/UiKitsData/DropdownData";

export default function DarkDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
   
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass="pb-0" title={DarkDropdownTitle} subTitle={darkDropdownSubTitle} />
                <CardBody className='dropdown-basic m-0 rtl-dropdown'>
                    <div className='common-flex dark-dropdown'>
                        <Dropdown isOpen={open} toggle={toggle} direction='down'>
                            <DropdownToggle color='dark'>{DarkNight}</DropdownToggle>
                            <DropdownMenu className="dropdown-block" dark>
                                <DropdownItem href={Href} className='bg-dark text-light'>{DarkMoon}</DropdownItem>
                                <DropdownItem href={Href}>{DarkOwl}</DropdownItem>
                                <DropdownItem href={Href}>{NightFall}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}