import React, { Fragment, useState } from 'react'
import { Col, FormGroup, Label } from 'reactstrap';
import DatePicker from "react-datepicker";
import { EndingDate, StartingDate } from '../../../../../Utils/Constants';

export default function StartEndDate() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleStartDate = (date: Date) => {
        setStartDate(date);
    };
    const handleEndDate = (date: Date) => {
        setEndDate(date);
    };
    return (
        <Fragment>
            <Col sm={4}>
                <FormGroup>
                    <Label>{StartingDate}</Label>
                    <DatePicker className="form-control" selected={startDate} onChange={handleStartDate} />
                </FormGroup>
            </Col>
            <Col sm={4}>
                <FormGroup>
                    <Label>{EndingDate}</Label>
                    <DatePicker className="form-control" selected={endDate} endDate={endDate} onChange={handleEndDate} />
                </FormGroup>
            </Col>
        </Fragment>
    )
}
