import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormControlTitle, MegaOptionsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import VariationRadio from './VariationRadio'
import VariationCheckbox from './VariationCheckbox'
import DefaultStyle from './DefaultStyle'
import WithoutBordersStyle from './WithoutBordersStyle'
import SolidBorderStyle from './SolidBorderStyle'
import OfferStyleBorder from './OfferStyleBorder'
import InlineStyle from './InlineStyle'
import VerticalStyle from './VerticalStyle'
import HorizontalStyle from './HorizontalStyle'

export default function MegaOptionsContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={MegaOptionsTitle} parent={FormControlTitle} title={MegaOptionsTitle} />
            <Container fluid>
                <Row>
                    <VariationRadio />
                    <VariationCheckbox />
                    <DefaultStyle />
                    <WithoutBordersStyle />
                    <SolidBorderStyle />
                    <OfferStyleBorder />
                    <InlineStyle />
                    <VerticalStyle/>
                    <HorizontalStyle/>
                </Row>
            </Container>
        </Fragment>
    )
}
