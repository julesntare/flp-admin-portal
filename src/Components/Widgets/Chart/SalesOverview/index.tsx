import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { SalesOverviewTitle, Today } from '../../../../Utils/Constants'
import { dailyDropdownList, salesOverviewOptions } from '../../../../Data/WidgetsData/ChartData'

export default function SalesOverview() {
    return (
        <Col xl={6} lg={12} className="box-col-6 col-xl-50">
            <Card>
                <DropdownWithHeader headerClass='pb-0' dropDownTitle={Today} heading={SalesOverviewTitle} caret={true} dropDownClass='card-header-right-icon' dropDownList={dailyDropdownList} />
                <CardBody>
                    <div className="chart-container progress-chart">
                        <div id="sales-overview-2">
                            <ReactApexChart options={salesOverviewOptions} series={salesOverviewOptions.series} type='line' height={320}/>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
