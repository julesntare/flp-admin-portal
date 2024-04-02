import React from 'react'
import { Col, Row } from 'reactstrap'
import UpcomingProjects from './UpcomingProjects'
import RedesignCard from './RedesignCard'
import UpcomingMeeting from './UpcomingMeeting'

export default function RightBackground() {
    return (
        <Col xxl={3} xl={100} className="box-col-12 ps-4 pe-4 right-background">
            <Row className="bg-light p-4 h-100">
                <Col xl={12} className="col-xl-50 box-col-6 pe-30 ps-20">
                    <Row>
                        <UpcomingProjects />
                        {RedesignCard()}
                    </Row>
                </Col>
                <UpcomingMeeting/>
            </Row>
        </Col>
    )
}
