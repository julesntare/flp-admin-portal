import { useState } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Btn } from '../../../../AbstractElements';
import { splitDropdownData, splitDropdownSubTitle } from '../../../../Data/UiKitsData/DropdownData';
import { Href, SplitDropdownTitle } from '../../../../Utils/Constants';
import SplitDemo from './SplitDemo';

export default function SplitDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => { setOpen(!open) }

    return (
        <Col sm={12} xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SplitDropdownTitle} subTitle={splitDropdownSubTitle} />
                <CardBody className='dropdown-basic me-0'>
                    <div className='common-flex'>
                        <SplitDemo />
                        {splitDropdownData && splitDropdownData.map((data, index) => (
                            <div className='btn-group' key={index}>
                                <Btn outline color={data.class}>{data.text}</Btn>
                                <Dropdown className='separated-btn' isOpen={open} toggle={toggle} direction='down'>
                                    <DropdownToggle color={data.class}><i className="icofont icofont-arrow-down"></i></DropdownToggle>
                                    <DropdownMenu className="dropdown-content">
                                        {data.menulist && data.menulist.map((item, index) => (
                                            <DropdownItem href={Href} key={index}>{item}</DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

