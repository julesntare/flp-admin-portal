import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { DefaultInput, LargeInput, SizingTitle, SmallInput } from '../../../../../Utils/Constants';
import { sizingSubTitle } from '../../../../../Data/Forms/FormControlsData';

export default function Sizing() {
    
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SizingTitle} subTitle={sizingSubTitle} />
                <CardBody className="card-wrapper input-group-wrapper">
                    <InputGroup size="sm">
                        <InputGroupText id="inputGroup-sizing-sm"> {SmallInput} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup size="default">
                        <InputGroupText id="inputGroup-sizing-default"> {DefaultInput} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup size="lg">
                        <InputGroupText id="inputGroup-sizing-lg"> {LargeInput} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
