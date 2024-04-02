import React from 'react'
import { Card, CardBody, Col, Input } from "reactstrap";
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { Creativity, HobbiesTitle, KhoKho, ReadingBooks, SelectSizingTitle } from '../../../../../Utils/Constants';
import { selectSizingSubTitle } from '../../../../../Data/Forms/FormControlsData';

export default function SelectSizing() {
    
    return (
        <Col md={6}>
            <Card>
            <CommonCardHeader headClass='pb-0' title={SelectSizingTitle} subTitle={selectSizingSubTitle} />
                <CardBody>
                    <Input type="select" name="select" bsSize={'sm'}>
                        <option value=''>{HobbiesTitle} </option>
                        <option value="1">{KhoKho}</option>
                        <option value="2">{ReadingBooks}</option>
                        <option value="3">{Creativity}</option>
                    </Input>
                </CardBody>
            </Card>
        </Col>
    )
}
