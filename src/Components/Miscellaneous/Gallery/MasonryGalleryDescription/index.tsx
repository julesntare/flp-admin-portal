import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryTitle, MasonryDescriptionTitle } from '../../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import MasonryDescription from './MasonryDescription'

export default function MasonryDescriptionContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={MasonryDescriptionTitle} parent={GalleryTitle} title={MasonryDescriptionTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <MasonryDescription />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
