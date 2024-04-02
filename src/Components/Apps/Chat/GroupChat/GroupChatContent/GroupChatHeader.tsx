import React, { Fragment } from 'react'
import { Image, LI, P, UL } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import ContactEdit from '../../Common/ContactEdit';

export default function GroupChatHeader() {
    const value = [16, 4, 7, 11, 4, 7, 9];
    return (
        <div className="right-sidebar-title">
            <div className="common-space d-flex">
                <div className="chat-time group-chat">
                    <UL className="simple-list flex-row">
                        {value.map((item, i, arr) => (
                            <Fragment key={i}>
                                {i !== arr.length - 1 && (
                                    <LI><Image className="img-fluid rounded-circle" src={dynamicImage(`avtar/${item}.jpg`)} alt="user" body={true} /></LI>
                                )}
                                {i === arr.length - 1 && (
                                    <LI>
                                        <div className="custom-name profile-count light-background">
                                            <P className="f-w-500">{item}{"+"}</P>
                                        </div>
                                    </LI>
                                )}
                            </Fragment>
                        ))}
                    </UL>
                    <div>
                        <span>{'Meeting Department'}</span>
                        <P>{'35 Members'}</P>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div className="contact-edit chat-alert"><i className="icon-info-alt"></i></div>
                    <ContactEdit divClass='chat-alert' />
                </div>
            </div>
        </div>
    )
}
