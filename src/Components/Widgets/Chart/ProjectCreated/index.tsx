import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ProjectCreatedTitle } from '../../../../Utils/Constants'
import { projectOptions } from '../../../../Data/DashboardsData/ProjectData'

export default function ProjectCreated() {
    return (
        <Col xl={6} lg={12} className='box-col-6 col-xl-50'>
            <Card>
                <CommonCardHeader title={ProjectCreatedTitle} />
                <CardBody className="p-0">
                    <div className="chart-container skill-chart">
                        <div id="revenuegrowth-2">
                            <ReactApexChart options={projectOptions} series={projectOptions.series} type='area' height={355} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col >
    )
}
