import React from 'react'
import { Col, Row } from 'reactstrap'
import SaleStatistic from '../SaleStatistic'
import OrderOverview_Monthly_InvoiceCards from '../../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/OrderOverview_Monthly_InvoiceCards'
import RecentActivity from './RecentActivity'
import NewCustomers from './NewCustomers'
import DiscountCard from '../../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/DiscountCard'
import UnlockCard from './UnlockCard'

export default function BottomCards() {
    return (
        <Row className="pe-0 proorder-xl-4">
            <Col xl={5} className="col-xl-100 box-col-12">
                <SaleStatistic />
                <Row>
                    <Col xl={12}>
                        <OrderOverview_Monthly_InvoiceCards />
                    </Col>
                </Row>
            </Col>
            <Col xl={7} className="col-xl-100 box-col-12">
                <UnlockCard />
                <Row>
                    <Col xl={12}>
                        <Row>
                            <RecentActivity />
                            <Col lg={7}>
                                <Row>
                                    <NewCustomers />
                                    <Col xl={12} className="pe-0">
                                        <DiscountCard />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
