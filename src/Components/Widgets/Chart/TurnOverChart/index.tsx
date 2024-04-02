import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { TurnOverTitle } from '../../../../Utils/Constants'
import { turnOverOptions } from '../../../../Data/WidgetsData/ChartData'

export default function TurnOverChart() {
    return (
        <Col xl={5} lg={12} className="col-xl-50">
            <Card>
                <CommonCardHeader title={TurnOverTitle} headClass='pb-0' />
                <CardBody>
                    <div className="chart-container">
                        <Row>
                            <Col xs={12}>
                                <div id="chart-widget7">
                                    <ReactApexChart options={turnOverOptions} series={turnOverOptions.series} type='area' height={300} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
