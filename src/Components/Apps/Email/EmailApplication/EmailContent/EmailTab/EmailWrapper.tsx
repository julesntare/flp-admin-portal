import React from 'react'
import { H3, H4, Image, LI, P, UL } from '../../../../../../AbstractElements'
import { Attachments, DownloadAll, Href } from '../../../../../../Utils/Constants'
import { actionsList } from '../../../../../../Data/AppsData/EmailData'
import { dynamicImage, dynamicNumber } from '../../../../../../Utils'

export default function EmailWrapper() {
    return (
        <div className="email-wrapper">
            <P>{'Hello..'}</P>
            <P>{"Dear Sir Good Morning,"}</P>
            <H3>{"Inquiry about our theme pages design."}</H3>
            <P className="m-b-20">{'Dunzo Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework, HTML5, CSS and JQuery.It has a huge collection of reusable UI components and integrated with latest jQuery plugins'}.</P>
            <P>{'It can be used for all type of Web applications like custom admin panel, app backend, CMS or CRM. UI components and integrated with latest jQuery plugins. Tivo Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework.'}</P>
            <hr />
            <div className="d-inline-block">
                <H4 className="text-muted">
                    <i className="icofont icofont-clip"></i> {Attachments}
                </H4>
                <a className="text-muted text-end right-download" href={Href}>
                    <i className="fa fa-long-arrow-down me-2"></i>{DownloadAll}
                </a>
                <div className="clearfix" />
            </div>
            <div className="attachment">
                <UL className="list-inline justify-content-start simple-list flex-row">
                    {dynamicNumber(3).map((item, index) => (
                        <LI className="list-inline-item" key={index}>
                            <Image className="img-fluid" src={dynamicImage(`email/${item}.jpg`)} alt="" />
                        </LI>
                    ))}
                </UL>
            </div>
            <hr />
            <div className="action-wrapper">
                <UL className="actions simple-list flex-row">
                    {actionsList.map((item, index) => (
                        <LI key={index}>
                            <a className="text-muted" href={Href}><i className={`fa fa-${item.icon} me-2`}></i>{item.text}</a>
                        </LI>
                    ))}
                </UL>
            </div>
        </div>
    )
}
