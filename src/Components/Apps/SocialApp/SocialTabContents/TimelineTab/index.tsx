import React from 'react'
import { Col, Row } from 'reactstrap'
import LeftSide from '../Common/LeftSide'
import NewUsersSocial from './NewUsersSocial'
import RightSide from '../Common/RightSide'

export default function TimelineTab() {
    return (
        <Row>
            <LeftSide />
            <Col xl={6} md={7} className="box-col-40 xl-40">
                <NewUsersSocial />
            </Col>
            <RightSide />
        </Row>
    )
}
