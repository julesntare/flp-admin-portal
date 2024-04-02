import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Doughnut } from 'react-chartjs-2';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { DoughnutChartTitle } from '../../../../Utils/Constants'
import { doughnutData, doughnutOption } from '../../../../Data/ChartsData/ChartJsChartData';

export default function DoughnutChart() {
    
    return (
        <Col xl={6} md={12} className='box-col-6'>
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={DoughnutChartTitle} />
                <CardBody className="chart-block chart-vertical-center">
                    <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
