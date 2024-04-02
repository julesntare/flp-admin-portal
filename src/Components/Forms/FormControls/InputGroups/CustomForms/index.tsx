import React from 'react'
import { Card, CardBody, Col, InputGroup, InputGroupText } from "reactstrap";
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { CustomFormsTitle, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteThemeTitle, Options, PixelstrapThemeTitle, Submit } from '../../../../../Utils/Constants';
import { customFormsSubTitle, favoriteChocolatesData, favoriteColorsData, favoriteThemeData, pixelstrapThemeData } from '../../../../../Data/Forms/FormControlsData';
import CustomFormSelect from './CustomFormSelect';
import { Btn } from '../../../../../AbstractElements';

export default function CustomForms() {
    
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomFormsTitle} subTitle={customFormsSubTitle} />
                <CardBody className="common-flex main-custom-form">
                    <InputGroup>
                        <InputGroupText htmlFor="inputGroupSelect01">{Options}</InputGroupText>
                        <CustomFormSelect inputId='inputGroupSelect01' title={PixelstrapThemeTitle} options={pixelstrapThemeData} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect02' title={FavoriteColorsTitle} options={favoriteColorsData} />
                        <InputGroupText htmlFor="inputGroupSelect02">{Options}</InputGroupText>
                    </InputGroup>
                    <InputGroup>
                        <Btn color='secondary' outline><i className="icofont icofont-credit-card"></i></Btn>
                        <CustomFormSelect inputId='inputGroupSelect03' title={FavoriteChocolatesTitle} options={favoriteChocolatesData} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect04' title={FavoriteThemeTitle} options={favoriteThemeData} />
                        <Btn color='secondary' outline>{Submit}</Btn>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
