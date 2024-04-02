import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { MoreVertical } from 'react-feather'
import { aboutDetailsData } from '../../../../../../Data/AppsData/SocialAppData'
import { H3, P } from '../../../../../../AbstractElements'

export default function AboutDetails() {
    return (
        <>
            {aboutDetailsData.map((data) => (
                <Col sm={12} key={data.id}>
                    <Card>
                        <CardHeader className="social-header pb-0">
                            <H3><span>{data.title}</span><span className="pull-right"><MoreVertical /></span></H3>
                        </CardHeader>
                        <CardBody>
                            {data.child.map((item) => (
                                <Row className="details-about" key={item.id}>
                                    {item.details.map((list) => (
                                        <Col sm={6} key={list.id}>
                                            <div className={`your-details ${list.id === 2 ? "your-details-xs" : ""}`}>
                                                <span className={`${data.id === 1 ? "mb-2 d-block" : ""}`}>
                                                    {list.text}:
                                                </span>
                                                {list.year && <P>{list.year}</P>}
                                                <P>{list.paragraph}</P>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
