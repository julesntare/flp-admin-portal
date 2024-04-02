import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Calendar from 'react-calendar'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { TodaySanFransico, UpcomingMeetingTitle } from '../../../../../Utils/Constants'
import { monthlyDropdownList } from '../../../../../Data/DashboardsData/ECommerceData'
import { H6, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import ReactApexChart from 'react-apexcharts'
import { projectRadarChart } from '../../../../../Data/DashboardsData/ProjectData'

export default function UpcomingMeeting() {
    const [date, setDate] = useState<Value>(new Date());
    const handleDateChange = (value: Value) => {
        if (value instanceof Date || Array.isArray(value)) {
            setDate(value);
        }
    };

    return (
        <Col xl={12} className="col-xl-50 box-col-6 p-0">
            <Card className="mb-0 upcoming-meeting">
                <DropdownWithHeader heading={UpcomingMeetingTitle} dropDownClass='icon-dropdown' dropDownList={monthlyDropdownList} dropDownIcon={true} />
                <CardBody className="p-0 pe-3">
                    <div className="default-datepicker">
                        <Calendar onChange={handleDateChange} value={date} />
                    </div>
                    <div className="today-weather mt-3">
                        <div className="d-flex">
                            <Image src={dynamicImage(`dashboard-3/sun.gif`)} alt="user" />
                            <span>{TodaySanFransico}</span>
                            <div className="flex-grow-1">
                                <H6>{'Jun,07 '}</H6>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ReactApexChart options={projectRadarChart} series={projectRadarChart.series} type='radar' height={300} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
