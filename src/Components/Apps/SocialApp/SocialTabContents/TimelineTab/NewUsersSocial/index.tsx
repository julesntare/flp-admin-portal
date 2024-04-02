import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import { Href, MoreCommnets } from '../../../../../../Utils/Constants'
import LikeContent from './LikeContent'
import CommentBox from './CommentBox'
import { newUsersSocialData } from '../../../../../../Data/AppsData/SocialAppData'
import NewUsersHeader from './NewUsersHeader'

export default function NewUsersSocial() {
    return (
        <Row>
            {newUsersSocialData.map((data) => (
                <Col sm={12} key={data.id}>
                    <Card>
                        <CardBody>
                            <NewUsersHeader/>
                            <Image className="img-fluid" alt="" src={dynamicImage(`social-app/timeline-${data.image}`)} />
                            <div className="timeline-content">
                                <P>{data.paragraph}</P>
                                <LikeContent />
                                <div className="social-chat">
                                    {data.child.map((item) => (
                                        <div className={item.divClass} key={item.id}>
                                            <div className="d-flex">
                                                <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="" src={dynamicImage(`user/${item.src}`)} />
                                                <div className="flex-grow-1">
                                                    <span>{item.name} <span>{item.time} <i className="fa fa-reply font-primary"></i></span></span>
                                                    <P>{item.paragraph}</P>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center"><a href={Href}>{MoreCommnets}</a></div>
                                </div>
                                <CommentBox />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
