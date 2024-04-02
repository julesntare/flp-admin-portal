import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H4, P } from '../../../../AbstractElements'
import { Href, LatestUpdatesTitle } from '../../../../Utils/Constants'
import { latestUpdatesData } from '../../../../Data/MiscellaneousData/FaqData'
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'

export default function LatestUpdates() {
    return (
        <Col lg={12}>
            <Card>
                <CardHeader className="faq-header pb-0">
                    <H4 className="d-inline-block m-0">{LatestUpdatesTitle}</H4>
                    <span className="pull-right d-inline-block">{"See All"}</span>
                </CardHeader>
                <CardBody className="faq-body">
                    {latestUpdatesData.map((data) => (
                        <div className="d-flex updates-faq-main" key={data.id}>
                            <div className="updates-faq">
                                <FeatherIconCom className="font-primary" iconName={data.icon} />
                            </div>
                            <div className="flex-grow-1 updates-bottom-time">
                                <P>{data.name} <a href={Href}>{data.anchor}</a> {data.title}</P>
                                <P>{data.time}</P>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
