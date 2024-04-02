import React from 'react'
import { Col, Row } from 'reactstrap'
import { H6 } from '../../../../../../AbstractElements'
import { BOD, Email, January, WilliamEmail } from '../../../../../../Utils/Constants'

export default function ProfileMail() {
    return (
        <Col sm={6} xl={4} className="order-sm-1 order-xl-0">
            <Row className="g-3">
                <Col md={6}>
                    <div className="text-start tour-email">
                        <H6 className="tour-mb-space">
                            <i className="fa fa-envelope me-2" />  {Email}
                        </H6>
                        <span>{WilliamEmail}</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="text-start ttl-sm-mb-0 tour-email">
                        <H6 className="tour-mb-space">
                            <i className="fa fa-calendar me-2" />  {BOD}
                        </H6>
                        <span>{January}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
