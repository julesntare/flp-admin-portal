import React from 'react'
import { Col, Row } from 'reactstrap'
import { ContactUs, ContactNo, LibbyStreet, Location } from '../../../../../../Utils/Constants'
import { H6 } from '../../../../../../AbstractElements'

export default function ProfileContact() {
    return (
        <Col sm={6} xl={4} className="order-sm-2 order-xl-2">
            <Row className="g-3">
                <Col md={6} className="mt-0 mt-sm-3">
                    <div className="text-start ttl-xs-mt tour-email">
                        <H6 className="tour-mb-space">
                            <i className="fa fa-phone me-2" />  {ContactUs}
                        </H6>
                        <span>{ContactNo}</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="text-start ttl-sm-mb-0 tour-email">
                        <H6 className="tour-mb-space">
                            <i className="fa fa-location-arrow me-2" />  {Location}
                        </H6>
                        <span>{LibbyStreet}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
