import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { StockMarketTitle } from '../../../../Utils/Constants'
import { optionsCandlestick } from '../../../../Data/WidgetsData/ChartData'

export default function StockMarket() {
    return (
        <Col sm={12} className="box-col-12">
            <div className="donut-chart-widget">
                <Card>
                    <CommonCardHeader title={StockMarketTitle} headClass='pb-0' />
                    <CardBody>
                        <div id="chart-widget13">
                            <ReactApexChart options={optionsCandlestick} series={optionsCandlestick.series} type='line' height={450} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}
