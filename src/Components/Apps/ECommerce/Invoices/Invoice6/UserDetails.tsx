import React from 'react'
import { Col, Row } from 'reactstrap'
import { H3, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function UserDetails() {
    return (
        <Row>
            <Col md={4}>
                <div className="d-flex">
                    <div className="media-left">
                        <Image className="media-object rounded-circle img-60" src={dynamicImage(`user/1.jpg`)} alt="user" />
                    </div>
                    <div className="flex-grow-1 m-l-20">
                        <H3 className="media-heading">{'Johan Deo'}</H3>
                        <P>{'JohanDeo@gmail.com'}<br /><span>{'555-555-5555'}</span></P>
                    </div>
                </div>
            </Col>
            <Col md={8}>
                <div className="text-md-end" id="project">
                    <H3>{'Project Description'}</H3>
                    <P>{"You're Only As Good As Your Last Collection, Which Is An EnormousPressure. Jeans Represent Democracy In Fashion.Fashion Is AboutDressing According To What's Fashionable."}</P>
                </div>
            </Col>
        </Row>
    )
}
