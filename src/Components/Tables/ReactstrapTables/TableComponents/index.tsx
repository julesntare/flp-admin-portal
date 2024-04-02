import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { ReactstrapTablesTitle, TableComponentsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import AllTableComponents from './AllTableComponents'

export default function TableComponentsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={TableComponentsTitle} parent={ReactstrapTablesTitle} title={TableComponentsTitle} />
            <Container fluid>
                <Row>
                    <AllTableComponents />
                </Row>
            </Container>
        </Fragment>
    )
}
