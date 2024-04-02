import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H3, H6, P } from '../../../AbstractElements'
import { LatestArticlesVideosTitle } from '../../../Utils/Constants'
import { latestArticlesVideosData } from '../../../Data/MiscellaneousData/FaqData'
import FeatherIconCom from '../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'

export default function LatestArticlesVideos() {
    return (
        <Col lg={12} className='faq-articles'>
            <div className="header-faq"><H3 className="mb-0">{LatestArticlesVideosTitle}</H3></div>
            <Row>
                {latestArticlesVideosData.map((data) => (
                    <Col xl={4} className={data.colClass} key={data.id}>
                        <Row>
                            {data.child.map((item) => (
                                <div key={item.id} className={item.colClass}>
                                    <Card>
                                        <CardBody>
                                            <div className="d-flex">
                                                <FeatherIconCom className='m-r-30' iconName={item.icon} />
                                                <div className="flex-grow-1">
                                                    <H6 className="f-w-600">{item.title}</H6>
                                                    <P>{item.text}</P>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </Row>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
