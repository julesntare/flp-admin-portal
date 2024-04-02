import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { SaleStatisticTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList, totalProjectOptions } from '../../../../Data/DashboardsData/ECommerceData'

export default function SaleStatistic() {
    return (
        <Row>
            <Col xl={12}>
                <Card className="categories-chart">
                    <DropdownWithHeader headerClass='pb-0' heading={SaleStatisticTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                    <CardBody className="p-0">
                        <div id="total-project">
                            <ReactApexChart options={totalProjectOptions} series={totalProjectOptions.series} type='bar' height={320} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
