import React, { useState } from 'react'
import { Card, CardBody, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Badges, Btn, H3, Image, LI, P } from '../../../../AbstractElements';
import { EmailFilter, Href, Inbox, Markjenco, MarkjencoMail, NewMail } from '../../../../Utils/Constants';
import { dynamicImage } from '../../../../Utils';
import { emailSidebarList } from '../../../../Data/AppsData/EmailData';

export default function EmailLeftAside() {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="md-sidebar">
            <Btn color='primary' className="md-sidebar-toggle" onClick={onClickHandle}>{EmailFilter}</Btn>
            <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
                <div className="email-left-aside">
                    <Card>
                        <CardBody>
                            <div className="email-app-sidebar">
                                <div className="d-flex align-items-center">
                                    <div className="media-size-email">
                                        <Image className="me-3 rounded-circle" src={dynamicImage(`user/user-dp.png`)} alt="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <H3>{Markjenco}</H3>
                                        <P>{'Markjecno@gmail.com'}</P>
                                    </div>
                                </div>
                                <Nav className="main-menu">
                                    <NavItem>
                                        <Link to={`${process.env.PUBLIC_URL}/applications/email/email-compose`} className="btn-primary btn-block btn-mail w-100">
                                            <i className="icofont icofont-envelope me-2"></i> {NewMail}
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="show" to={`${process.env.PUBLIC_URL}/applications/email/email-app`}>
                                            <span className="title"><i className="icon-import"></i> {Inbox}</span>
                                            <Badges color="transparent" className="pull-right">{'(236)'}</Badges>
                                        </Link>
                                    </NavItem>
                                    {emailSidebarList.map((item) => (
                                        <LI key={item.id}>
                                            {!item.line ? (
                                                <a href={Href}>
                                                    <span className="title"><i className={`icon-${item.icon}`}></i>{item.title}</span>
                                                    {item.badge && <Badges color='transparent' className='pull-right'>({item.badge})</Badges>}
                                                </a>
                                            ) : (
                                                item.line
                                            )}
                                        </LI>
                                    ))}
                                </Nav>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}
