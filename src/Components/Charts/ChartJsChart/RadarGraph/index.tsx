import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Radar } from 'react-chartjs-2';
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { RadarGraphTitle } from '../../../../Utils/Constants';
import { radarGraphData, radarOptions } from '../../../../Data/ChartsData/ChartJsChartData';

export default function RadarGraph() {
    
    return (
        <Col xl={6} md={12} className='box-col-6' >
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={RadarGraphTitle} />
                <CardBody className='chart-block'>
                    <Radar data={radarGraphData} options={radarOptions} width={724} height={362} />
                </CardBody>
            </Card>
        </Col>
    )
}
