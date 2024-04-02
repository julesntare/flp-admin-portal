import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { RadarChartTitle } from '../../../../Utils/Constants'
import { radarCharts } from '../../../../Data/ChartsData/ApexChartData'

export default function RadarChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={RadarChartTitle} />
                <CardBody>
                    <div id="radarchart">
                        <ReactApexChart options={radarCharts} series={radarCharts.series} type="radar" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
