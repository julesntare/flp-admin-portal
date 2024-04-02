import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ChartTitle, WidgetsTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import ChartWidgetTop from './ChartWidgetTop'
import ProjectCreated from './ProjectCreated'
import SalesOverview from './SalesOverview'
import MonthlyHistory from './MonthlyHistory'
import LiveProducts from './LiveProducts'
import TurnOverChart from './TurnOverChart'
import CryptoCharts from './CryptoCharts'
import StockMarket from './StockMarket'
import FinanceOrderStatusChart from './FinanceOrderStatusChart'
import MonthlySalesUsesCharts from './MonthlySalesUsesCharts'

export default function ChartWidgets() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ChartTitle} parent={WidgetsTitle} title={ChartTitle} />
            <Container fluid>
                <ChartWidgetTop />
                <Row>
                    <ProjectCreated />
                    <SalesOverview />
                    <MonthlyHistory />
                </Row>
                <Row>
                    <LiveProducts />
                    <TurnOverChart />
                    <CryptoCharts/>
                </Row>
                <Row>
                    <StockMarket />
                    <FinanceOrderStatusChart/>
                    <MonthlySalesUsesCharts/>
                </Row>
            </Container>
        </Fragment>
    )
}
