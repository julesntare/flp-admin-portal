import React, { useEffect, useRef, useState } from 'react'
import { Form, Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import { Btn, Image } from '../../../../../../AbstractElements'
import { RootState } from '../../../../../../redux-toolkit/store';
import { replyByUserAsync, sendMessageAsync } from '../../../../../../redux-toolkit/reducers/ChatReducer';
import { dynamicImage } from '../../../../../../Utils';
import PlusIconDropdown from './PlusIconDropdown';

export default function SendMessages() {
    const [messageInput, setMessageInput] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const { chats, selectedUser, currentUser } = useSelector((state: RootState) => state.chat);
    const dispatch = useDispatch();
    const chatHistoryRef = useRef<HTMLDivElement | null>(null);
    const addEmoji = (emoji: string) => {
        const text = `${messageInput}${emoji}`;
        setShowEmojiPicker(false);
        setMessageInput(text);
    };
    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };
    useEffect(scrollToBottom, [chats]);

    const handleMessageChange = (message: string) => {
        setMessageInput(message);
    };
    const handleMessagePress = () => {
        let currentUserId = currentUser.id;
        let selectedUserId = selectedUser.id;
        let selectedUserName = selectedUser.name;
        if (messageInput.length > 0) {
            dispatch(sendMessageAsync({ currentUserId, selectedUserId, messageInput, chats }));
            setMessageInput("");
            setTimeout(() => {
                const replyMessage = `Hey This is ${selectedUserName}, Sorry I'm busy right now, I will text you later`;
                if (selectedUser.online === true) {
                    dispatch(replyByUserAsync({ currentUserId, selectedUserId, replyMessage, chats }));
                }
            }, 1500);
        }
    };
    return (
        <Form className="msger-inputarea">
            <PlusIconDropdown />
            <Input type="text" className="msger-input two uk-textarea" placeholder="Type a message......" value={messageInput}
                onChange={(e) => handleMessageChange(e.target.value)} />
            <div>
                {showEmojiPicker ? (<EmojiPicker onEmojiClick={(e) => addEmoji(e.emoji)} />) : null}
            </div>
            <div className='smiley-box'>
                <div className="picker second-btn uk-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
            </div>
            <Btn color='primary' className='msger-send-btn' onClick={handleMessagePress}>
                <i className="fa fa-location-arrow" />
            </Btn>
        </Form>
    )
}
