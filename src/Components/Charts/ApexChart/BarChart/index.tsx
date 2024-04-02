import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { BarChartTitle } from '../../../../Utils/Constants'
import { barChart } from '../../../../Data/ChartsData/ApexChartData'

export default function BarChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={BarChartTitle} />
                <CardBody>
                    <div id="basic-bar">
                        <ReactApexChart options={barChart} series={barChart.series} type="bar" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
