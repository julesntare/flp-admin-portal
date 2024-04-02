import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { DatepickerTitle, FormWidgetsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import DefaultCalendar from './DefaultCalendar'
import ReactstrapCalendar from './ReactstrapCalendar'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

export default function DatepickerContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={DatepickerTitle} parent={FormWidgetsTitle} title={DatepickerTitle} />
            <Container fluid>
                <Row>
                    <DefaultCalendar/>
                    <ReactstrapCalendar/>
                    <DatePicker/>
                    <TimePicker/>
                </Row>
            </Container>
        </Fragment>
    )
}
