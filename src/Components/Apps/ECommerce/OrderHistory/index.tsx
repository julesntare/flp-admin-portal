import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Ecommerce, RecentOrderTitle } from '../../../../Utils/Constants'
import OrderCards from './OrderCards'
import DatatableOrderHistory from './DatatableOrderHistory'

export default function OrderHistoryContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={RecentOrderTitle} parent={Ecommerce} title={RecentOrderTitle} />
            <Container fluid>
                <Row>
                    <OrderCards/>
                    <DatatableOrderHistory/>
                </Row>
            </Container>
        </Fragment>
    )
}
