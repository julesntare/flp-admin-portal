import React from 'react'
import { Col } from 'reactstrap'
import MyProfileCard from './MyProfileCard'
import MutualFriends from './MutualFriends'
import ActivityFeed from './ActivityFeed'

export default function LeftSide() {
    return (
        <Col xl={3} md={5} className="box-col-30 xl-30">
            <div className="default-according style-1 faq-accordion">
                <MyProfileCard />
                <MutualFriends />
                <ActivityFeed />
            </div>
        </Col>
    )
}
