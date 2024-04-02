import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Ecommerce, WishlistTitle } from '../../../../Utils/Constants'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import WishlistCards from './WishlistCards'

export default function WishlistContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={WishlistTitle} parent={Ecommerce} title={WishlistTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={WishlistTitle} />
                            <CardBody>
                                <WishlistCards/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
