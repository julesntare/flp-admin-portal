import React from 'react'
import { Card, CardBody, Col, Form, InputGroup, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomizingConjunctionTitle, DatePickerCardTitle, DefaultDate, DisabledDates, HumanFriendly, MinMaxValue, MultipleDatesTitle, PreloadingDates, Range } from '../../../../../Utils/Constants'
import DatePickerComponent from './DatePickerComponent'
import HumanFriendlyDatePicker from './HumanFriendlyDatePicker'
import MinMaxValueDatePicker from './MinMaxValueDatePicker'
import DisabledDatePicker from './DisabledDatePicker'
import MultiplesDates from './MultiplesDates'
import DateRange from './DateRange'
import CustomizingConjunction from './CustomizingConjunction'

export default function DatePicker() {
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={DatePickerCardTitle} />
                <CardBody className="main-flatpickr">
                    <div className="card-wrapper border rounded-3">
                        <Form className="timepicker-wrapper">
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{DefaultDate}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><DatePickerComponent /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{HumanFriendly}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><HumanFriendlyDatePicker /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{MinMaxValue}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><MinMaxValueDatePicker /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{DisabledDates}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><DisabledDatePicker /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{MultipleDatesTitle}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><MultiplesDates /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{CustomizingConjunctionTitle}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><CustomizingConjunction /> </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{Range}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><DateRange /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{PreloadingDates}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><DatePickerComponent /></InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
