import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { DonutChartTitle } from '../../../../Utils/Constants'
import { donutChart } from '../../../../Data/ChartsData/ApexChartData'

export default function DonutChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={DonutChartTitle} />
                <CardBody className='apex-chart'>
                    <div id="donutchart">
                        <ReactApexChart options={donutChart} series={donutChart.series} type="donut" width={380} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
