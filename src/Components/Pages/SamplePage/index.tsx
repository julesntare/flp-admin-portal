import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CardHeaderSpan from '../../../Utils/CommonComponents/CardHeaderSpan'
import { P } from '../../../AbstractElements'
import { PagesTitle, SampleCardSpan, SampleCardTitle, SamplePageTitle } from '../../../Utils/Constants'

export default function SamplePageContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={SamplePageTitle} parent={PagesTitle} title={SamplePageTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardHeaderSpan heading={SampleCardTitle} span={SampleCardSpan} />
                            <CardBody>
                                <P>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</P>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
