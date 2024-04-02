import React from 'react'
import { Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { Info, Secondary, SegmentedButtonsTitle } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';
import ButtonDropdownList from '../ButtonsWithDropdowns/ButtonDropdownList';
import { segmentedButtonsData1, segmentedButtonsData2, segmentedButtonsSubTitle } from '../../../../../Data/Forms/FormControlsData';

export default function SegmentedButtons() {
    
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={SegmentedButtonsTitle} subTitle={segmentedButtonsSubTitle} />
                <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
                    <InputGroup>
                        <Btn color="info" outline> {Info}</Btn>
                        <ButtonDropdownList color="info" split={true} span={true} divider={true} options={segmentedButtonsData1} />
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" />
                        <Btn color="secondary" outline>{Secondary}</Btn>
                        <ButtonDropdownList color="secondary" split={true} span={true} divider={true} options={segmentedButtonsData2} />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
