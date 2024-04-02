import React from 'react'
import { Col, Row } from 'reactstrap'
import { Follower, Following } from '../../../../../../Utils/Constants'

export default function ProfileFollower() {
    return (
        <div className="follow">
            <Row>
                <Col xs={6} className="text-md-end border-right">
                    <div className="follow-num counter">{'25.8K'}</div>
                    <span>{Follower}</span>
                </Col>
                <Col xs={6} className='text-md-start'>
                    <div className="follow-num counter">{'65.2M'}</div>
                    <span>{Following}</span>
                </Col>
            </Row>
        </div>
    )
}
