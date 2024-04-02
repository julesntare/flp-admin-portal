import React from 'react'
import { useSelector } from 'react-redux';
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import ContactEdit from '../../Common/ContactEdit'
import { RootState } from '../../../../../redux-toolkit/store';

export default function ChatHeader() {
    const { selectedUser } = useSelector((state: RootState) => state.chat);

    return (
        <div className="right-sidebar-title">
            <div className="common-space d-flex">
                <div className="chat-time">
                    <div className="active-profile">
                        <Image className="img-fluid rounded-circle" src={dynamicImage(selectedUser.image ? selectedUser.image : 'blog/comment.jpg')} alt="user" />
                        <div className="status bg-success"></div>
                    </div>
                    <div>
                        <span>{selectedUser ? selectedUser.name : 'Darrell Steward'}</span>
                        <P>{'Online'}</P>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div className="contact-edit chat-alert">
                        <i className="icon-info-alt"></i>
                    </div>
                    <ContactEdit divClass='chat-alert' />
                </div>
            </div>
        </div>
    )
}
