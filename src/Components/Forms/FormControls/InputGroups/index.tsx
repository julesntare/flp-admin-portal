import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormControlTitle, InputGroupsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import ButtonAddons from './ButtonAddons'
import CustomForms from './CustomForms'
import CustomFileInput from './CustomFileInput'
import ButtonsWithDropdowns from './ButtonsWithDropdowns'
import SegmentedButtons from './SegmentedButtons'
import CheckboxesAndRadios from './CheckboxesAndRadios'
import Sizing from './Sizing'
import MultipleInputs from './MultipleInputs'
import BasicInputGroups from './BasicInputGroups'
import VariationAddons from './VariationAddons'

export default function InputGroupsContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={InputGroupsTitle} parent={FormControlTitle} title={InputGroupsTitle} />
            <Container fluid>
                <Row>
                    <ButtonAddons />
                    <CustomForms/>
                    <CustomFileInput/>
                    <ButtonsWithDropdowns/>
                    <SegmentedButtons/>
                    <CheckboxesAndRadios/>
                    <Sizing/>
                    <MultipleInputs/>
                    <BasicInputGroups/>
                    <VariationAddons/>
                </Row>
            </Container>
        </Fragment>
    )
}
