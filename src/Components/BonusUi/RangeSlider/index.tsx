import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, RangeSliderTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicRange from './BasicRange'
import NagativeValue from './NagativeValue'
import DisabledSlider from './DisabledSlider'
import FormatedLabel from './FormatedLabel'
import FormatedLabel2 from './FormatedLabel2'
import Draggable from './Draggable'

export default function RangeSliderContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={RangeSliderTitle} parent={BonusUiTitle} title={RangeSliderTitle} />
            <Container fluid>
                <Row>
                    <BasicRange/>
                    <NagativeValue/>
                    <DisabledSlider/>
                    <FormatedLabel/>
                    <FormatedLabel2/>
                    <Draggable/>
                </Row>
            </Container>
        </Fragment>
    )
}
