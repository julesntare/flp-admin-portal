import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { SteplineChartTitle } from '../../../../Utils/Constants'
import { steplineChart } from '../../../../Data/ChartsData/ApexChartData'

export default function SteplineChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={SteplineChartTitle} />
                <CardBody>
                    <div id="chart-bubble">
                        <ReactApexChart options={steplineChart} series={steplineChart.series} type="line" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
