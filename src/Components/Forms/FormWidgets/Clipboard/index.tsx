import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ClipboardTitle, FormWidgetsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import ClipboardOnTextInput from './ClipboardOnTextInput'
import ClipboardOnTextArea from './ClipboardOnTextArea'
import ClipboardOnParagraph from './ClipboardOnParagraph'
import CopyPortionFromParagraph from './CopyPortionFromParagraph'

export default function ClipboardContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ClipboardTitle} parent={FormWidgetsTitle} title={ClipboardTitle} />
            <Container fluid>
                <Row>
                    <ClipboardOnTextInput />
                    <ClipboardOnTextArea />
                    <ClipboardOnParagraph />
                    <CopyPortionFromParagraph />
                </Row>
            </Container>
        </Fragment>
    )
}
