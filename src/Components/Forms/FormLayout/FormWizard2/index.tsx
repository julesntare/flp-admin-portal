import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BusinessVerticalTitle, BusinessWizardTitle, CustomHorizontalTitle, CustomVerticalTitle, FormLayoutTitle, FormWizard2Title } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import CustomWizard from './CustomWizard'
import BusinessWizard from './BusinessWizard'

export default function FormWizard2Container() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={FormWizard2Title} parent={FormLayoutTitle} title={FormWizard2Title} />
            <Container fluid>
                <Row>
                    <CustomWizard title={CustomHorizontalTitle} navColClass='col-12' tabColClass='col-12' />
                    <BusinessWizard title={BusinessVerticalTitle} divClass='vertical-options' navColClass='col-xl-3' tabColClass='col-xl-9' />
                    <CustomWizard title={CustomVerticalTitle} divClass='vertical-options' navColClass='col-md-3' tabColClass='col-md-9' />
                    <BusinessWizard title={BusinessWizardTitle} navColClass='col-12' tabColClass='col-12' />
                </Row>
            </Container>
        </Fragment>
    )
}
