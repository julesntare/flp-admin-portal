import { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { Balloons, Cake, HeadingDropdownTitle, Href, Party, PartyList } from "../../../../Utils/Constants";
import { headingDropdownSubTitle } from "../../../../Data/UiKitsData/DropdownData";

export default function HeadingDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }
    
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass="pb-0" title={HeadingDropdownTitle} subTitle={headingDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <div className='btn-group'>
                            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                                <DropdownToggle color='success rounded-pill'>{Party}</DropdownToggle>
                                <DropdownMenu className="dropdown-block">
                                    <DropdownItem href={Href} header className='fw-bold fs-6 border-bottom border-2'>{PartyList}</DropdownItem>
                                    <DropdownItem href={Href}>{Balloons}</DropdownItem>
                                    <DropdownItem href={Href}>{Cake}</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

