import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { ToDoFilter } from '../../../../Utils/Constants';
import ProfileHeader from './ProfileHeader';
import TodoNav from './TodoNav';

export default function LeftTodo() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen); }
    return (
        <Col xxl={3} xl={4} className="box-col-4e">
            <div className="email-sidebar md-sidebar">
                <Btn color='primary' className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>{ToDoFilter}</Btn>
                <div className={`email-left-aside md-sidebar-aside ${isOpen ? 'open' : ''}`}>
                    <Card>
                        <CardBody>
                            <div className="email-app-sidebar left-bookmark custom-scrollbar">
                                <ProfileHeader />
                                <TodoNav />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Col>
    )
}
