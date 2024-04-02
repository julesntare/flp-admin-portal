import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Chart from 'react-google-charts';
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { ComboChartTitle } from '../../../../../Utils/Constants'
import { comboChartData, comboChartOption } from '../../../../../Data/ChartsData/GoogleChartData';

export default function ComboChart() {
    
    return (
        <Col sm={12} className='box-col-12'>
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={ComboChartTitle} />
                <CardBody className="chart-block">
                    <div className="chart-overflow">
                        <Chart
                            width={"100%"}
                            height={500}
                            chartType={"ComboChart"}
                            loader={<div>{"Loading Chart"}</div>}
                            data={comboChartData}
                            options={comboChartOption}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
