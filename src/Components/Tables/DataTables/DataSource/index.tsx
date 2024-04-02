import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { DataSourceTitle, DataTablesTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import HtmlSourcedData from './HtmlSourcedData'
import AjaxSourcedData from './AjaxSourcedData'
import JavascriptSourcedData from './JavascriptSourcedData'
import ServerSideProcessing from './ServerSideProcessing'

export default function DataSourceContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={DataSourceTitle} parent={DataTablesTitle} title={DataSourceTitle} />
            <Container fluid>
                <Row>
                    <HtmlSourcedData />
                    <AjaxSourcedData />
                    <JavascriptSourcedData />
                    <ServerSideProcessing />
                </Row>
            </Container>
        </Fragment>
    )
}
