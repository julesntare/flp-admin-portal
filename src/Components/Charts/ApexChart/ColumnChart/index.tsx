import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { ColumnChartTitle } from '../../../../Utils/Constants'
import { columnChart } from '../../../../Data/ChartsData/ApexChartData'

export default function ColumnChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={ColumnChartTitle} />
                <CardBody>
                    <div id="column-chart">
                        <ReactApexChart options={columnChart} series={columnChart.series} type="bar" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
