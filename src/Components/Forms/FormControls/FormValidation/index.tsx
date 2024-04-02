import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormControlTitle, ValidationFormTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import TooltipFormValidation from './TooltipFormValidation'
import BrowserDefaults from './BrowserDefaults'
import ValidationForm from './ValidationForm'

export default function FormValidationContainer() {
  
  return (
    <Fragment>
      <Breadcrumbs pageTitle={ValidationFormTitle} parent={FormControlTitle} title={ValidationFormTitle} />
      <Container fluid>
        <Row>
          <TooltipFormValidation />
          <BrowserDefaults/>
          <ValidationForm/>
        </Row>
      </Container>
    </Fragment>
  )
}
