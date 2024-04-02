import React, { Fragment } from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, CalendarTitle } from '../../../Utils/Constants'
import DraggableEvents from './DraggableEvents'
import DefaultCalendar from './DefaultCalendar'

export default function CalendarContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CalendarTitle} parent={AppsTitle} title={CalendarTitle} />
            <Container fluid className="calendar-basic">
                <Card>
                    <CardBody>
                        <Row>
                            <DraggableEvents />
                            <DefaultCalendar />
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    )
}
