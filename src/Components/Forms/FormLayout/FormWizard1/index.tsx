import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormLayoutTitle, FormWizardTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import NumberingWizard from './NumberingWizard'
import StudentValidationForm from './StudentValidationForm'
import VerticalValidationWizard from './VerticalValidationWizard'
import ShippingForm from './ShippingForm'

export default function FormWizard1Container() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={FormWizardTitle} parent={FormLayoutTitle} title={FormWizardTitle} />
            <Container fluid>
                <Row>
                    <NumberingWizard/>
                    <StudentValidationForm/>
                    <VerticalValidationWizard/>
                    <ShippingForm/>
                </Row>
            </Container>
        </Fragment>
    )
}
