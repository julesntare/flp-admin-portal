import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import { LineGraphTitle } from '../../../../Utils/Constants';
import { lineGraphData, lineGraphOptions } from '../../../../Data/ChartsData/ChartJsChartData';

export default function LineGraph() {
    
    return (
        <Col xl={6} md={12} className='box-col-6' >
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={LineGraphTitle} />
                <CardBody className="chart-block">
                    <Line data={lineGraphData} options={lineGraphOptions} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    );
}
