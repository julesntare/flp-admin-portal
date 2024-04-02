import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Ecommerce, ProductListTitle } from '../../../../Utils/Constants'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ProductListHeader from './ProductListHeader'
import ProductListTable from './ProductListTable'

export default function ProductListContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ProductListTitle} parent={Ecommerce} title={ProductListTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <ProductListHeader/>
                                <ProductListTable/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
