import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Line } from 'react-chartjs-2';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { LineChartTitle } from '../../../../Utils/Constants';
import { lineChartData, lineChartOption } from '../../../../Data/ChartsData/ChartJsChartData';

export default function LineChart() {
    
    return (
        <Col xl={6} md={12} className='box-col-6' >
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={LineChartTitle} />
                <CardBody className='chart-block'>
                    <Line data={lineChartData} options={lineChartOption} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
