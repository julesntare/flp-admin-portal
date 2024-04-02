import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { EditorsTitle, MdeEditorTitle } from '../../../../Utils/Constants'
import { Container } from 'reactstrap'
import FirstExample from './FirstExample'
import SecondExample from './SecondExample'

export default function MdeEditorContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={MdeEditorTitle} parent={EditorsTitle} title={MdeEditorTitle} />
            <Container fluid>
                <FirstExample />
                <SecondExample />
            </Container>
        </Fragment>
    )
}
