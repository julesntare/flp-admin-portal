import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { BasicAreaChartTitle } from '../../../../Utils/Constants'
import { basicAreaChart } from '../../../../Data/ChartsData/ApexChartData'

export default function BasicAreaChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={BasicAreaChartTitle} />
                <CardBody>
                    <div id="basic-apex">
                        <ReactApexChart options={basicAreaChart} series={basicAreaChart.series} type="area" height={350}/>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
