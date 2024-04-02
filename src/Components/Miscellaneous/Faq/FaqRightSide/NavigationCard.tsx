import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { Settings } from 'react-feather'
import { Badges, Btn, H4, LI, UL } from '../../../../AbstractElements'
import { AskQuestion, Href, Navigation } from '../../../../Utils/Constants'
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'
import { navigationData } from '../../../../Data/MiscellaneousData/FaqData'

export default function NavigationCard() {
    return (
        <Col lg={12}>
            <Card className="card-mb-faq">
                <CardHeader className="faq-header pb-0"><H4>{Navigation}</H4><Settings /></CardHeader>
                <CardBody className="faq-body">
                    <div className="navigation-btn">
                        <Btn color='primary' className='d-flex'>
                            <FeatherIconCom className="m-r-10" iconName='MessageSquare' />
                            {AskQuestion}
                        </Btn>
                    </div>
                    <div className="navigation-option">
                        {navigationData.map((data) => (
                            <Fragment key={data.id}>
                                <UL className='simple-list'>
                                    {data.child.map((item) => (
                                        <LI key={item.id}>
                                            <a href={Href}>
                                                <FeatherIconCom iconName={item.icon} />
                                                {item.text}
                                            </a>
                                            {item.badge && <Badges color='primary' className='pull-right' pill>{item.badge}</Badges>}
                                        </LI>
                                    ))}
                                </UL>
                                {data.id !== navigationData.length && <hr />}
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
