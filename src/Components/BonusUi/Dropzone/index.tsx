import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, DropzoneTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import DefaultDropzone from './DefaultDropzone'
import ImagePreview from './ImagePreview'
import SingleFileupload from './SingleFileupload'
import MultiFileUpload from './MultiFileUpload'

export default function DropzoneContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={DropzoneTitle} parent={BonusUiTitle} title={DropzoneTitle} />
            <Container fluid>
                <Row>
                    <DefaultDropzone/>
                    <ImagePreview/>
                    <SingleFileupload/>
                    <MultiFileUpload/>
                </Row>
            </Container>
        </Fragment>
    )
}
