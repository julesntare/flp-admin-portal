import React from 'react'
import Chart from 'react-google-charts';
import { Card, CardBody, Col } from "reactstrap";
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan';
import { CommonChartProps } from '../../../../Types/CommonComponentType';

export default function CommonChart({ title, bodyClass, colClass, data, divClass }: CommonChartProps) {
    
    return (
        <Col className={colClass ? colClass : "col-sm-12 col-xl-6 box-col-6"}>
            <Card>
                <CardHeaderSpan headingClassName='pb-0' heading={title} />
                <CardBody className={`chart-block ${bodyClass ? bodyClass : ''}`}>
                    <div className={divClass ? divClass : "chart-overflow"}>
                        <Chart
                            width={data?.width}
                            height={data?.height}
                            chartType={data?.chartType}
                            loader={<div>{"Loading Chart"}</div>}
                            data={data?.data}
                            options={data?.option}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
