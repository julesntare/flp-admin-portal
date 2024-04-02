import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { CkEditorTitle, EditorsTitle } from '../../../../Utils/Constants'
import { Container } from 'reactstrap'
import CkEditorComponent from './CkEditorComponent'
import InlineEditor from './InlineEditor'

export default function CkEditorContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CkEditorTitle} parent={EditorsTitle} title={CkEditorTitle} />
            <Container fluid>
                <CkEditorComponent />
                <InlineEditor/>
            </Container>
        </Fragment>
    )
}
