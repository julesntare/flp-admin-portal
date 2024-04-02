import React from 'react';
import { H6, LI, P, UL } from '../../../AbstractElements'
import SvgIcon from '../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { Checkall, DeliveryComplete, DeliveryProcessing, Href, Notitications, OrderComplete, TicketsGenerated } from '../../../Utils/Constants'

export default function Notification() {
    return (
        <LI className="onhover-dropdown">
            <div className="notification-box">
                <SvgIcon iconId='fill-Bell'/>
            </div>
            <div className="onhover-show-div notification-dropdown">
                <H6 className="f-18 mb-0 dropdown-title">{Notitications}</H6>
                <UL className='simple-list'>
                    <LI className="b-l-primary bg-light-primary border-4 mt-3">
                        <P className="font-primary">{DeliveryProcessing} <span className="font-primary">{'10 min.'}</span></P>
                    </LI>
                    <LI className="b-l-secondary bg-light-secondary border-4 mt-3">
                        <P className="font-secondary">{OrderComplete}<span className="font-secondary">{'1 hr'}</span></P>
                    </LI>
                    <LI className="b-l-success bg-light-success border-4 mt-3">
                        <P className="font-success">{TicketsGenerated}<span className="font-success">{'3 hr'}</span></P>
                    </LI>
                    <LI className="b-l-info bg-light-info border-4 mt-3">
                        <P className="font-info">{DeliveryComplete}<span className="font-info">{'6 hr'}</span></P>
                    </LI>
                    <LI><a className="f-w-700" href={Href}>{Checkall}</a></LI>
                </UL>
            </div>
        </LI>
    )
}
