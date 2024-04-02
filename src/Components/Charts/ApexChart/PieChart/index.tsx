import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import ReactApexChart from 'react-apexcharts'
import { PieChartTitle } from '../../../../Utils/Constants'
import { pieChart } from '../../../../Data/ChartsData/ApexChartData'

export default function PieChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={PieChartTitle} />
                <CardBody className='apex-chart'>
                    <div id="piechart">
                        <ReactApexChart options={pieChart} series={pieChart.series} type="pie" width={380} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
