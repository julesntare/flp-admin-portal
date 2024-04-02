import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { SalesOverviewTitle } from '../../../../../Utils/Constants'
import { monthlyDropdownList, salesOverviewOptions } from '../../../../../Data/DashboardsData/DefaultData'

export default function SalesOverview() {
    return (
        <Col xxl={9} xl={80} md={8} className="box-col-6 proorder-xl-8">
            <Card className="sales overview">
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={SalesOverviewTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="p-0">
                    <div className="sales-chart">
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div id="sales-overview">
                            <ReactApexChart options={salesOverviewOptions} series={salesOverviewOptions.series} type='line' height={257} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
