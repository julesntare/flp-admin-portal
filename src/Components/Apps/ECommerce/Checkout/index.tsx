import React, { Fragment } from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BillingDetails, CheckoutTitle, Ecommerce } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import CheckoutForm from './CheckoutForm'
import CheckoutDetails from './CheckoutDetails'

export default function CheckoutContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CheckoutTitle} parent={Ecommerce} title={CheckoutTitle} />
            <Container fluid>
                <Card>
                    <CommonCardHeader title={BillingDetails} headClass='pb-0' />
                    <CardBody>
                        <Row>
                            <CheckoutForm/>
                            <CheckoutDetails/>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    )
}
