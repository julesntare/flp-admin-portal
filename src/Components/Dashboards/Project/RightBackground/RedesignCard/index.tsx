import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H5, H6 } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { redesignCardData } from '../../../../../Data/DashboardsData/ProjectData'
import CommonDropdown from '../../../../../Utils/CommonComponents/DashboardsCommon/CommonDropdown'
import { monthlyDropdownList } from '../../../../../Data/DashboardsData/ECommerceData'

export default function RedesignCard() {
    return redesignCardData.map((item) => (
        <Col xl={12} className="col-xl-100 p-0 pe-30 ps-20" key={item.id}>
            <Card className="redesign">
                <CardBody>
                    <div className="header-top">
                        <H6 className="font-primary">{item.title}</H6>
                        <CommonDropdown dropDownClass='icon-dropdown' dropDownList={monthlyDropdownList} dropDownIcon={true} />
                    </div>
                    <H5>{item.text}</H5>
                    <div className="flex-shrink-0">
                        <SvgIcon iconId='calendar' />
                        <span>{"Created on "}{item.date}</span>
                    </div>
                    <Link to={`${process.env.PUBLIC_URL}/applications/project/create-project`}>
                        <div className="d-flex">
                            <div className={item.iconClass}>
                                <SvgIcon iconId='timer' />
                            </div>
                            <div className="flex-grow-1">
                                <span>{"Deadline"}</span>
                                <H6>{item.dayDate}</H6>
                            </div>
                        </div>
                    </Link>
                </CardBody>
            </Card>
        </Col>
    ))
}
