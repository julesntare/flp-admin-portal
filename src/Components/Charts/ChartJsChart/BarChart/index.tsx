import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Bar } from 'react-chartjs-2'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { BarChartTitle } from '../../../../Utils/Constants'
import { barChartData, barChartOptions } from '../../../../Data/ChartsData/ChartJsChartData'

export default function BarChart() {
    
    return (
        <Col xl={6} md={12} className='box-col-6'>
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={BarChartTitle} />
                <CardBody className="chart-block">
                    <Bar data={barChartData} options={barChartOptions} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
