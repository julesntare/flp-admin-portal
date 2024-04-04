import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { monthlyDropdownList, recentActivityData } from '../../../../../Data/DashboardsData/ECommerceData'
import { RecentActivityTitle } from '../../../../../Utils/Constants'
import { Image, LI, P, UL } from '../../../../../AbstractElements'
import ActivityLine from './ActivityLine'
import { dynamicImage } from '../../../../../Utils'

export default function RecentActivity() {
    return (
        <Col lg={5}>
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={RecentActivityTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="recent-activity">
                    <UL className='simple-list'>
                        <ActivityLine />
                        {recentActivityData.map((item) => (
                            <LI className={`d-flex ${item.id === 3 ? 'align-items-baseline ms-3' : ''}`} key={item.id}>
                                {item.src && <Image src={dynamicImage(`dashboard-2/user/${item.src}`)} alt="" />}
                                {item.id === 3 && <div className="badge-dot-danger"></div>}
                                <div className={item.id === 3 ? "ms-4" : "ms-2"}><span>{item.dateTime}</span>
                                    {item.paragraph && <P>{item.paragraph}</P>}
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
