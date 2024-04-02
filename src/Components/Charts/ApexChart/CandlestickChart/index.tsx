import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { CandlestickChartTitle } from '../../../../Utils/Constants'
import { candleStickChart } from '../../../../Data/ChartsData/ApexChartData'

export default function CandlestickChart() {
    
    return (
        <Col sm={12} xl={12} className="box-col-12">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={CandlestickChartTitle} />
                <CardBody>
                    <div id="candlestick">
                        <ReactApexChart options={candleStickChart} series={candleStickChart.series} type="candlestick" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
