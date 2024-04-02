import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { DashboardTitle, ECommerceTitle, EcommerceDashboardTitle } from '../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import OnlineOrderCards from '../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/OnlineOrderCards'
import { onlineOrderCardData } from '../../../Data/DashboardsData/ECommerceData'
import FeedbackCard from './FeedbackCard'
import SalesEventCalendar from './SalesEventCalendar'
import SaleTopCountries from './SaleTopCountries'
import RecentOrder from './RecentOrder'
import CategoriesBySales from '../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/CategoriesBySales'
import BottomCards from './BottomCards'

export default function EcommerceDashboard() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={EcommerceDashboardTitle} parent={DashboardTitle} title={ECommerceTitle} />
            <Container className="ecommerce-dashboard" fluid>
                <Row className="bg-light p-4 mb-4">
                    <OnlineOrderCards data={onlineOrderCardData} />
                    <FeedbackCard />
                    <SalesEventCalendar />
                </Row>
                <Row>
                    <SaleTopCountries />
                    <RecentOrder />
                    <CategoriesBySales colClass='proorder-xl-1' />
                    <BottomCards />
                </Row>
            </Container>
        </Fragment >
    )
}
