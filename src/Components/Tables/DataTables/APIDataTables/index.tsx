import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { APIDataTablesTitle, DataTablesTitle } from '../../../../Utils/Constants'
import AddRowsTables from './AddRowsTables'
import ChildRowsTables from './ChildRowsTables'
import RowSelectionAndDeletion from './RowSelectionAndDeletion'
import CustomFiltering from './CustomFiltering'

export default function APIDataTablesContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={APIDataTablesTitle} parent={DataTablesTitle} title={APIDataTablesTitle} />
            <Container fluid>
                <Row>
                    <AddRowsTables />
                    <ChildRowsTables />
                    <RowSelectionAndDeletion />
                    <CustomFiltering />
                </Row>
            </Container>
        </Fragment>
    )
}
