import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { ContactsTitle, Personal } from '../../../../../Utils/Constants'
import { RootState } from '../../../../../redux-toolkit/store';
import { PersonalTabProp, UserCallbackUserType, UserUpdateType } from '../../../../../Types/ContactType';
import { setEditRow } from '../../../../../redux-toolkit/reducers/BookmarkReducer';
import NewContactList from './NewContactList';
import UpdateUserForm from './UpdateUserForm';
import ContactDetails from './ContactDetails';

export default function PersonalTab({historyToggle}: PersonalTabProp) {
    const { users } = useSelector((state: RootState) => state.contact);
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState<undefined | UserCallbackUserType | UserUpdateType>();
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const userCallback = useCallback((user: UserCallbackUserType) => {
        setSelectedUser(user);
    }, []);
    const userEditCallback = useCallback((edit: boolean, usersData: UserUpdateType) => {
        setEditData(usersData);
        setSelectedUser(usersData);
        setEditing(edit);
        dispatch(setEditRow(usersData));
    }, []);
    return (
        <Card className="mb-0">
            <CardHeaderSpan headingClassName='d-flex' heading={Personal} span={`${users.length} ${ContactsTitle}`} />
            <CardBody className="p-0">
                <Row className="list-persons">
                    <NewContactList users={users} userCallback={userCallback}/>
                    <Col xl={8} md={7} className="xl-50">
                        {editing ? (
                            <UpdateUserForm editData={editData} userEditCallback={userEditCallback} />
                        ) : (
                            <TabContent activeTab={0}>
                                <TabPane tabId={0}>
                                    <ContactDetails historyToggle={historyToggle} selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                                </TabPane>
                            </TabContent>
                        )}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
