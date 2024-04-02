import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Ecommerce, PaymentDetailsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import Cod from './Cod'
import Emi from './Emi'
import NetBanking from './NetBanking'

export default function PaymentDetailsContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={PaymentDetailsTitle} parent={Ecommerce} title={PaymentDetailsTitle} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCard />
          <Cod />
          <Emi />
          <NetBanking />
        </Row>
      </Container>
    </Fragment>
  )
}
