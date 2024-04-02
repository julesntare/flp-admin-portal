import React, { Fragment, useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ChatTitle, PrivateChatTitle } from '../../../../Utils/Constants'
import LeftSidebarChat from '../Common/LeftSidebarChat'
import PrivateChatContent from './PrivateChatContent'
import { ChatApi, ChatContactApi, ChatMembersApi } from '../../../../api'
import { setAllMembers, setChats, setContacts } from '../../../../redux-toolkit/reducers/ChatReducer'

export default function PrivateChatContainer() {
    const dispatch = useDispatch();
    const fetchChatApiData = async () => {
        try {
            const response = await axios.get(ChatApi);
            dispatch(setChats(response.data.data));
        } catch (error) {
            console.error("data not fetched", error);
        }
    };
    const fetchChatMemberApiData = async () => {
        try {
            const response = await axios.get(ChatMembersApi);
            dispatch(setAllMembers(response.data));
            return response.data;
        } catch (error) {
            console.error("data not fetched", error);
        }
    };
    const fetchChatContactApiData = async () => {
        try {
            const response = await axios.get(ChatContactApi);
            dispatch(setContacts(response.data));
        } catch (error) {
            console.error("data not fetched", error);
        }
    };
    useEffect(() => {
        fetchChatApiData();
        fetchChatMemberApiData();
        fetchChatContactApiData();
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={PrivateChatTitle} parent={ChatTitle} title={PrivateChatTitle} />
            <Container fluid>
                <Row className='g-0'>
                    <LeftSidebarChat />
                    <PrivateChatContent />
                </Row>
            </Container>
        </Fragment>
    )
}
