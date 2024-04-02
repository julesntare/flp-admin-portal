import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ButtonsTitle, DefaultStyleTitle } from '../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import AllButtonLists from './AllButtonLists'

export default function DefaultStyleContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={DefaultStyleTitle} parent={ButtonsTitle} title={DefaultStyleTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <AllButtonLists/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
