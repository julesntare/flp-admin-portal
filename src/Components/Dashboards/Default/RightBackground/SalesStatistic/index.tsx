import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { SalesStatisticTitle, SeeMore, ViewCount } from '../../../../../Utils/Constants'
import { monthlyDropdownList, salesOptions } from '../../../../../Data/DashboardsData/DefaultData'
import { Btn, H5, P } from '../../../../../AbstractElements'

export default function SalesStatistic() {
    const colorType = ['primary', 'light-primary']
    return (
        <Col xl={4} md={4} className="col-dash-40 box-col-6 proorder-xl-1">
            <Card className="sales">
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={SalesStatisticTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody>
                    <div id="sales-chart">
                        <ReactApexChart options={salesOptions} series={salesOptions.series} type='donut' height={300} />
                    </div>
                    <div className="d-flex">
                        {colorType.map((item, index) => (
                            <Fragment key={index}>
                                <div className="flex-shrink-0 me-2"><span className={`bg-${item}`}></span></div>
                                <div className={`flex-grow-1 ${index === 0 ? 'me-2' : ''}`}>
                                    <H5>{ViewCount} <strong>{'340k'}</strong></H5>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <P>{"Keep up info updated to increase the number of ionteractions"}</P>
                    <Btn color='transparent'>{SeeMore}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
