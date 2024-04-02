import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { AdvanceInitTitle, DataTablesTitle } from '../../../../Utils/Constants'
import StockResult from './StockResult'
import RowCreateCallback from './RowCreateCallback'

export default function AdvanceInitContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AdvanceInitTitle} parent={DataTablesTitle} title={AdvanceInitTitle} />
            <Container fluid>
                <Row>
                    <StockResult />
                    <RowCreateCallback/>
                </Row>
            </Container>
        </Fragment>
    )
}
