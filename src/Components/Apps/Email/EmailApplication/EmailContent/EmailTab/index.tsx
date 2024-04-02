import React from 'react'
import { Col, Row, TabPane } from 'reactstrap'
import { H3, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import EmailWrapper from './EmailWrapper'
import { mailInboxData } from '../../../../../../Data/AppsData/EmailData'

export default function EmailTab() {
    return (
        <>
            {mailInboxData.map((item, index) => (
                <TabPane key={index} tabId={index + 1}>
                    <div className="email-content">
                        <div className="email-top">
                            <Row>
                                <Col md={6} sm={12} className="xl-100">
                                    <div className="d-flex">
                                        <Image className="me-3 rounded-circle" src={dynamicImage(`user/user-dp.png`)} alt="" />
                                        <div className="flex-grow-1">
                                            <H3 className="p-0">{item.title}
                                                <small>
                                                    <span>({item.date}</span> {item.month}) <span>{'6:00'}</span> {'AM'}
                                                </small>
                                            </H3>
                                            <P>{"Inquiry about our theme pages design."}</P>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <EmailWrapper />
                    </div>
                </TabPane>
            ))}
        </>
    )
}
