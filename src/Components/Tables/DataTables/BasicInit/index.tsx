import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BasicDataTablesTitle, DataTablesTitle } from '../../../../Utils/Constants'
import ZeroConfigurationTable from './ZeroConfigurationTable'
import StateSavingTable from './StateSavingTable'
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight'

export default function BasicInitContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BasicDataTablesTitle} parent={DataTablesTitle} title={BasicDataTablesTitle} />
            <Container fluid>
                <Row>
                    <ZeroConfigurationTable />
                    <StateSavingTable/>
                    <ScrollVerticalDynamicHeight/>
                </Row>
            </Container>
        </Fragment>
    )
}
