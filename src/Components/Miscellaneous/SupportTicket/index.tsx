import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, SupportTicketList, SupportTicketSpan, SupportTicketTitle } from '../../../Utils/Constants'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CardHeaderSpan from '../../../Utils/CommonComponents/CardHeaderSpan'
import TicketList from './TicketList'
import TicketTable from './TicketTable'

export default function SupportTicketContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={SupportTicketTitle} parent={AppsTitle} title={SupportTicketTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardHeaderSpan headingClassName='pb-0' heading={SupportTicketList} span={SupportTicketSpan} />
                            <CardBody>
                                <TicketList />
                                <TicketTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
