import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { financeOrderStatusData } from '../../../../Data/WidgetsData/ChartData'

export default function FinanceOrderStatusChart() {
    return (
        <>
            {financeOrderStatusData.map((item) => (
                <Col lg={12} xl={item.xl} className={`box-col-${item.xl}`} key={item.id}>
                    <Card>
                        <CommonCardHeader title={item.title} />
                        <CardBody>
                            <div className={`chart-container ${item.chartClass ? item.chartClass : ''}`}>
                                <div id="columnchart">
                                    <ReactApexChart options={item.chart} series={item.chart.series} type='line' height={350} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
