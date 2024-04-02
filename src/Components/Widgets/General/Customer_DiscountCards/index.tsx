import React from 'react'
import { Col, Row } from 'reactstrap'
import CustomerCard from '../../../../Utils/CommonComponents/DashboardsCommon/DefaultCommon/CustomerCard'
import DiscountCard from '../../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/DiscountCard'
import { customerCardData } from '../../../../Data/WidgetsData/GeneralData'

export default function Customer_DiscountCards() {
    return (
        <Col xl={6} className="col-xl-100 box-col-12">
            <Row>
                <Col md={5}>
                    <Row>
                        <CustomerCard data={customerCardData} />
                    </Row>
                </Col>
                <Col md={7}>
                    <DiscountCard />
                </Col>
            </Row>
        </Col>
    )
}
