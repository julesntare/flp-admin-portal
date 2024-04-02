import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Btn, H3, Image, P } from '../../../../AbstractElements'
import { BookmarkFilter } from '../../../../Utils/Constants';
import { dynamicImage } from '../../../../Utils';
import NavTabs from './NavTabs';

export default function LeftAsideBookmark() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen);};
    return (
        <Col xl={3} className="box-col-3">
            <div className="md-sidebar">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{BookmarkFilter}</Btn>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <div className="d-flex align-items-center">
                                        <div className="media-size-email">
                                            <Image className="me-3 rounded-circle" src={dynamicImage(`user/user-dp.png`)} alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <H3 className="f-w-600">{'MARK JENCO'}</H3>
                                            <P>{'Markjecno@gmail.com'}</P>
                                        </div>
                                    </div>
                                    <NavTabs />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </Col>
    )
}
