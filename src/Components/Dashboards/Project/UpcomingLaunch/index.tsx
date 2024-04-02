import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { monthlyDropdownList } from '../../../../Data/DashboardsData/ECommerceData'
import { DunzoAppLaunch, SetReminder, UpcomingLaunchTitle } from '../../../../Utils/Constants'
import { Btn, H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../Utils'

export default function UpcomingLaunch() {
    return (
        <Col xl={12}>
            <Card className="upcoming-launch">
                <DropdownWithHeader headerClass='pb-0' heading={UpcomingLaunchTitle} dropDownClass='icon-dropdown' dropDownList={monthlyDropdownList} dropDownIcon={true} />
                <CardBody>
                    <div className="meeting">
                        <div className="d-flex">
                            <H4>{DunzoAppLaunch}</H4><span>{'11:30PM'}</span>
                        </div>
                        <P>{"Anna Catmire is hosting a meeting for dunzo app launch. endeavour to be there!"}</P>
                        <div className="flex-shrink-0">
                            <Link to={`${process.env.PUBLIC_URL}/applications/to-do`}>
                                <Btn color='primary'>{SetReminder}</Btn>
                            </Link>
                            <div className="user-details customers">
                                <UL className='simple-list'>
                                    {dynamicNumber(2).map((item, index) => (
                                        <LI className="d-inline-block" key={index}>
                                            <Image src={dynamicImage(`dashboard-3/user/${item}.png`)} alt="user" />
                                        </LI>
                                    ))}
                                    <LI className="d-inline-block">
                                        <div className="light-card"><span className="f-w-500">{'+9'}</span></div>
                                    </LI>
                                </UL>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
