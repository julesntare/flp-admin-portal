import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Chart from 'react-google-charts';
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { GanttChartTitle } from '../../../../../Utils/Constants'
import { ganttChartData, ganttChartOptions } from '../../../../../Data/ChartsData/GoogleChartData';

export default function GanttChart() {
    
    return (
        <Col sm={12} className="box-col-12">
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={GanttChartTitle} />
                <CardBody className="chart-block">
                    <div className="chart-overflow">
                        <Chart chartType="Gantt" width='100%' height={300}
                            loader={<div>{"Loading Chart"}</div>}
                            data={ganttChartData}
                            options={ganttChartOptions}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
