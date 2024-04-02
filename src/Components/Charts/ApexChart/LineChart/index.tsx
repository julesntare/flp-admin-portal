import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { ColumnChartTitle } from '../../../../Utils/Constants'
import { lineWithAnnotationChart } from '../../../../Data/ChartsData/ApexChartData'

export default function LineChart() {
    
    return (
        <Col sm={12} xl={12} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={ColumnChartTitle} />
                <CardBody>
                    <div id="annotationchart">
                        <ReactApexChart options={lineWithAnnotationChart} series={lineWithAnnotationChart.series} type="line" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
