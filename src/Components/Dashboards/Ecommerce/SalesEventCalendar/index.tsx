import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H3, Image, P } from '../../../../AbstractElements'
import { Discount, SalesEventCalendarTitle, SetSalesEvents } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function SalesEventCalendar() {
    return (
        <Col xl={4} className="col-xl-70 box-col-7 pe-0 pedding-sm">
            <Card className="mb-0 margin-bottom sales-event">
                <CardBody className="pt-0">
                    <div className="d-flex">
                        <div className="event">
                            <H3>{SalesEventCalendarTitle}</H3>
                            <P>{"Bland it curability id vel vitae Ullamcorper sapien ante quam id. Vulputate viverra dictum."}</P>
                        </div>
                        <div className="sale">
                            <Image src={dynamicImage(`dashboard-2/event.png`)} alt="" />
                        </div>
                    </div>
                    <div className="set-sales">
                        <Link className="btn btn-primary mt-2" to={`${process.env.PUBLIC_URL}/applications/calendar-basic`}>{SetSalesEvents}</Link>
                        <Link className="btn discount mt-2" to={`${process.env.PUBLIC_URL}/applications/ecommerce/product`}>{Discount}</Link>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
