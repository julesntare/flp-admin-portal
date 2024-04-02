import React, { useState } from 'react'
import { NewContactListProps, UserCallbackUserType } from '../../../../../../Types/ContactType'
import { Col, Nav, NavLink } from 'reactstrap';
import EmptyData from '../../Common/EmptyData';
import { H3, Image, P } from '../../../../../../AbstractElements';

export default function NewContactList({ users, userCallback }: NewContactListProps) {
    const [dynamicTab, setDynamicTab] = useState(0);
    const contactDetails = (user: UserCallbackUserType) => {
        userCallback({ id: user.id, name: user.name, surname: user.surname, email: user.email, avatar: user.avatar, age: user.age, mobile: user.mobile });
    };
    return (
        <Col xl={4} md={5} className="xl-50">
            <Nav className="flex-column" pills>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <NavLink className={dynamicTab === index ? 'active' : ''} key={index} onClick={() => {
                            contactDetails(user)
                            setDynamicTab(index);
                        }}>
                            <div className="d-flex">
                                <Image className="img-50 img-fluid m-r-20 rounded-circle" src={`${user.avatar}`} alt="" body={true} />
                                <div className="flex-grow-1">
                                    <H3>
                                        <span className='first_name_0'>{user.name}</span>
                                        <span className='last_name_0'>{user.surname}</span>
                                    </H3>
                                    <P className='email_add_0'>{user.email}</P>
                                </div>
                            </div>
                        </NavLink>
                    ))) : (<EmptyData />)}
            </Nav>
        </Col>
    )
}
