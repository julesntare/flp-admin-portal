import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GalleryTitle, MasonryGalleryTitle } from '../../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import MasonryGallery from './MasonryGallery'

export default function MasonryGalleryContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={MasonryGalleryTitle} parent={GalleryTitle} title={MasonryGalleryTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12} className='box-col-12'>
                        <MasonryGallery />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
