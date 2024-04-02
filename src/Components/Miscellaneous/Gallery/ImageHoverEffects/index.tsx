import React, { Fragment } from 'react'
import { GalleryTitle, ImageHoverEffectsTitle } from '../../../../Utils/Constants'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Container, Row } from 'reactstrap'
import ImageHover from './ImageHover'

export default function ImageHoverContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ImageHoverEffectsTitle} parent={GalleryTitle} title={ImageHoverEffectsTitle} />
            <Container fluid>
                <ImageHover />
            </Container>
        </Fragment>
    )
}
