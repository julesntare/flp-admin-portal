import React from 'react'
import { Col, Card, CardBody } from 'reactstrap';
import { PolarArea } from 'react-chartjs-2';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import { PolarChartTitle } from '../../../../Utils/Constants';
import { polarData, polarOption } from '../../../../Data/ChartsData/ChartJsChartData';

export default function PolarChart() {
    
    return (
        <Col xl={6} md={12} className='box-col-6'>
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={PolarChartTitle} />
                <CardBody className="chart-block chart-vertical-center">
                    <PolarArea data={polarData} options={polarOption} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
