import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import ReactApexChart from 'react-apexcharts'
import { RadialBarChartTitle } from '../../../../Utils/Constants'
import { radialBarChart } from '../../../../Data/ChartsData/ApexChartData'

export default function RadialBarChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={RadialBarChartTitle} />
                <CardBody>
                    <div id="circlechart">
                        <ReactApexChart options={radialBarChart} series={radialBarChart.series} type="radialBar" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
