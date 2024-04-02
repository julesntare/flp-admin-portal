import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { AceCodeEditorTitle, EditorsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import JavascriptMode from './JavascriptMode'
import HtmlMode from './HtmlMode'
import CssMode from './CssMode'
import PhpMode from './PhpMode'

export default function AceCodeEditorContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AceCodeEditorTitle} parent={EditorsTitle} title={AceCodeEditorTitle} />
            <Container fluid>
                <Row>
                    <JavascriptMode />
                    <HtmlMode />
                    <CssMode />
                    <PhpMode /> 
                </Row>
            </Container>
        </Fragment>
    )
}
