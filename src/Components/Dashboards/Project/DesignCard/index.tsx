import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H5, P } from '../../../../AbstractElements'
import { DesignCardTitle, HireUs } from '../../../../Utils/Constants'

export default function DesignCard() {
    return (
        <Col xs={12}>
            <Card className="design-card">
                <CardBody>
                    <H5>{DesignCardTitle}</H5>
                    <P>{"Bringing Well-crafted design and scalable infrastructure."}</P>
                    <Link className="btn" to={`${process.env.PUBLIC_URL}/miscellaneous/job-search/job-apply`}>
                        {HireUs}
                    </Link>
                </CardBody>
            </Card>
        </Col>
    )
}
