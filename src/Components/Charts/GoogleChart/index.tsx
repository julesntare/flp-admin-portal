import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ChartsTitle, GoogleChartTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import ChartLists from './ChartLists'

export default function GoogleChartContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={GoogleChartTitle} parent={ChartsTitle} title={GoogleChartTitle} />
            <Container fluid>
                <Row>
                    <ChartLists/>
                </Row>
            </Container>
        </Fragment>
    )
}
