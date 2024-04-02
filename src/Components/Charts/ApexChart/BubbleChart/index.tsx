import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { BubbleChartTitle } from '../../../../Utils/Constants'
import { bubbleChart } from '../../../../Data/ChartsData/ApexChartData'

export default function BubbleChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={BubbleChartTitle} />
                <CardBody>
                    <div id="chart-bubble">
                        <ReactApexChart options={bubbleChart} series={bubbleChart.series} type="bubble" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
