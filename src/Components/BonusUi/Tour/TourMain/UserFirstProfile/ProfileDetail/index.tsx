import React from 'react'
import { Col, Row } from 'reactstrap'
import ProfileMail from './ProfileMail'
import { Link } from 'react-router-dom'
import { WebDesigner, WilliamJennings } from '../../../../../../Utils/Constants'
import ProfileContact from './ProfileContact'
import SocialMedia from '../../CommonProfile/SocialMedia'
import ProfileFollower from './ProfileFollower'

export default function ProfileDetail() {
    return (
        <div className="info">
            <Row className="g-3 step3">
                <ProfileMail />
                <Col sm={12} xl={4} className="order-sm-0 order-xl-1">
                    <div className="user-designation tour-email">
                        <div className="title">
                            <Link to={`${process.env.PUBLIC_URL}/components/bonus-ui/tour`}> {WilliamJennings} </Link>
                        </div>
                        <div className="desc mt-2"> {WebDesigner}</div>
                    </div>
                </Col>
                <ProfileContact />
            </Row>
            <hr />
            <SocialMedia />
            <ProfileFollower />
        </div>

    )
}
