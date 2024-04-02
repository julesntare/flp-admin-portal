import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Ecommerce, PricingTitle } from '../../../../Utils/Constants'
import BecomeMember from './BecomeMember'
import SimplePricingCard from './SimplePricingCard'

export default function PricingContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={PricingTitle} parent={Ecommerce} title={PricingTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <BecomeMember/>
                        <SimplePricingCard/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
