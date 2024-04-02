import React, { Fragment, useRef } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs'
import { Ecommerce, InvoiceTitle } from '../../../../../Utils/Constants'
import InvoiceSixHeader from './InvoiceSixHeader';
import UserDetails from './UserDetails';
import InvoiceSixTable from './InvoiceSixTable';
import Invoice6Button from './Invoice6Button';

export default function Invoice6Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={InvoiceTitle} parent={Ecommerce} title={InvoiceTitle} />
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <div ref={componentRef} className="invoice">
                                    <div>
                                        <InvoiceSixHeader />
                                        <hr />
                                        <UserDetails />
                                        <InvoiceSixTable />
                                    </div>
                                    <Invoice6Button componentRef={componentRef} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
