import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryDescriptionTitle, GalleryTitle } from '../../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import ImageGalleryDescription from './ImageGalleryDescription'

export default function GalleryDescriptionContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={GalleryDescriptionTitle} parent={GalleryTitle} title={GalleryDescriptionTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <ImageGalleryDescription/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
