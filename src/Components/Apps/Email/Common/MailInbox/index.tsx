import React, { useState } from 'react'
import { Col, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { H3, Image, P } from '../../../../../AbstractElements'
import { Href, Inbox } from '../../../../../Utils/Constants'
import InboxDropdown from './InboxDropdown'
import { CallbackProp } from '../../../../../Types/EmailType'
import { mailInboxData } from '../../../../../Data/AppsData/EmailData'
import { dynamicImage } from '../../../../../Utils'

export default function MailInbox({ activeCallback }: CallbackProp) {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <Col xl={4} md={12} className="box-md-12 pr-0">
            <div className="pe-0"></div>
            <div className="email-top">
                <Row>
                    <Col><H3>{Inbox}</H3></Col>
                    <InboxDropdown />
                </Row>
            </div>
            <Nav>
                <div className="inbox custom-scrollbar">
                    {mailInboxData.map((item, index) => (
                        <NavItem key={index}>
                            <NavLink className={activeTab === index ? "active" : ""} href={Href}
                                onClick={() => {
                                    setActiveTab(index + 1);
                                    activeCallback(index + 1);
                                }}>
                                <div className="d-flex">
                                    <div className="media-size-email">
                                        <Image className="me-3 rounded-circle" src={dynamicImage(`user/user-dp.png`)} alt="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <H3>{item.title}
                                            <small>
                                                <span>({item.date}</span> {item.month} <span>{item.year})</span>
                                            </small>
                                        </H3>
                                        <P>{"Mattis luctus. Donec nisi diam,"}</P>
                                    </div>
                                </div>
                            </NavLink>
                        </NavItem>
                    ))}
                </div>
            </Nav>
        </Col>
    )
}
