import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { CartTitle, Ecommerce } from '../../../../Utils/Constants'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import CartTable from './CartTable'

export default function CartContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CartTitle} parent={Ecommerce} title={CartTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={CartTitle} headClass='pb-0' />
                            <CardBody>
                                <CartTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
