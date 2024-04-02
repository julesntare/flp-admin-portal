import React, { useState } from 'react'
import { LeftContactAsideProps } from '../../../../Types/ContactType'
import { Card, CardBody, Col } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { ContactFilter } from '../../../../Utils/Constants';
import ProfileHeader from './Common/ProfileHeader';
import ContactNav from './ContactNav';

export default function LeftContactAside({ activeTab, setActiveTab, changeTab }: LeftContactAsideProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Col xl={3} className="box-col-3">
            <div className="md-sidebar">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{ContactFilter}</Btn>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <ProfileHeader />
                                    <ContactNav activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab} />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </Col>
    )
}
