import React from 'react'
import { Col, Row } from 'reactstrap'
import LeftSide from '../Common/LeftSide'
import RightSide from '../Common/RightSide'
import KnownPeople from './Common/KnownPeople'
import { PepoleKnownTitle, ViewedProfileTitle } from '../../../../../Utils/Constants'
import AboutDetails from './AboutDetails'
import ActivityLog from './ActivityLog'

export default function AboutTab() {
    return (
        <Row>
            <LeftSide />
            <Col xl={6} md={7} className="box-col-40 xl-40">
                <Row>
                    <KnownPeople heading={PepoleKnownTitle} />
                    <AboutDetails/>
                    <KnownPeople heading={ViewedProfileTitle} />
                    <ActivityLog />
                </Row>
            </Col>
            <RightSide />
        </Row>
    )
}
