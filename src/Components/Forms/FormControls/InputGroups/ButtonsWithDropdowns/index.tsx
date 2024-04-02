import React from 'react'
import { Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { ButtonsWithDropdownsTitle, Dropdown } from '../../../../../Utils/Constants';
import { buttonDropdownData1, buttonDropdownData2, buttonDropdownData3, buttonDropdownData4, buttonsWithDropdownSubTitle } from '../../../../../Data/Forms/FormControlsData';
import ButtonDropdownList from './ButtonDropdownList';

export default function ButtonsWithDropdowns() {
    
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader title={ButtonsWithDropdownsTitle} subTitle={buttonsWithDropdownSubTitle}/>
                <CardBody className="main-custom-form card-wrapper input-group-wrapper">
                    <InputGroup>
                        <ButtonDropdownList color='info' outline={true} title={Dropdown} divider={true} options={buttonDropdownData1} />
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" />
                        <ButtonDropdownList color='danger' outline={true} title={Dropdown} divider={true} options={buttonDropdownData2} />
                    </InputGroup>
                    <InputGroup>
                        <ButtonDropdownList color='secondary' title={Dropdown} divider={true} options={buttonDropdownData3} />
                        <Input type="text" />
                        <ButtonDropdownList color='primary' title={Dropdown} divider={true} options={buttonDropdownData4} />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
