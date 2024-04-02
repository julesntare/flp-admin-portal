import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryTitle } from '../../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import ImageGallery from './ImageGallery'

export default function GalleryGridContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={GalleryTitle} parent={GalleryTitle} title={GalleryTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <ImageGallery/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
