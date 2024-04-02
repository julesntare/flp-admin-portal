import React from 'react'
import { Card, CardBody, Col, Form, InputGroup, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DateWithTime, HourPicker, PreloadingTime, TimePickerLimits, TimePickerMinMaxRange, TimePickerRange, TimePickerTitle } from '../../../../../Utils/Constants'
import TimePickerComponent from './TimePickerComponent'
import HourPickerComponent from './HourPickerComponent'
import TimePickerWithLimitedTime from './TimePickerWithLimitedTime'

export default function TimePicker() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={TimePickerTitle} />
                <CardBody className="main-flatpickr">
                    <div className="card-wrapper border rounded-3">
                        <Form className="timepicker-wrapper" onSubmit={handleSubmit}>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{TimePickerTitle}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup><TimePickerComponent /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{HourPicker}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup><HourPickerComponent /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{TimePickerLimits}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup><TimePickerComponent /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{PreloadingTime}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup><TimePickerComponent /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{TimePickerRange}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup><TimePickerWithLimitedTime /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{TimePickerMinMaxRange}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3}><Label className="box-col-12 text-start">{DateWithTime}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
