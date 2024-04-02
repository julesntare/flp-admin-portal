import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { ProgressCardTitle } from '../../../../Utils/Constants'
import { H5, H6, P } from '../../../../AbstractElements'
import { progressOptions } from '../../../../Data/DashboardsData/ProjectData'

export default function ProgressCard() {
    return (
        <Col xl={3} lg={3} md={4}>
            <Card className="progress-chart">
                <CardBody>
                    <div className="progress-card" id="progress-chart">
                        <ReactApexChart options={progressOptions} series={progressOptions.series} type='radialBar' height={300} />
                    </div>
                    <div className="d-flex"> <span>{"On Progress"}</span>
                        <H6 className="font-primary">{'75%'}</H6>
                    </div>
                    <H5>{ProgressCardTitle}</H5>
                    <P>{"Present eu dolor eu orc vehicula euismod."}</P>
                </CardBody>
            </Card>
        </Col>
    )
}
