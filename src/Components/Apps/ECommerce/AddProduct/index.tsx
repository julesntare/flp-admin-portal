import React, { Fragment, useCallback, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { AddProductTitle, Ecommerce, ProductForm } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import ProductFormNav from './ProductFormNav'
import ProductTabContents from './ProductTabContents'

export default function AddProductContainer() {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AddProductTitle} parent={Ecommerce} title={AddProductTitle} />
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CommonCardHeader title={ProductForm} />
                            <CardBody>
                                <Row className="g-xl-5 g-3">
                                    <ProductFormNav steps={steps} setSteps={setSteps} />
                                    <ProductTabContents steps={steps} activeCallBack={activeCallBack} />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
