import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { AreaSpalineChartTitle } from '../../../../Utils/Constants'
import { areaSpalineChart } from '../../../../Data/ChartsData/ApexChartData'

export default function AreaSpalineChart() {
    
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={AreaSpalineChartTitle} />
                <CardBody>
                    <div id="area-spaline">
                        <ReactApexChart options={areaSpalineChart} series={areaSpalineChart.series} type="area" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
