import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { GeneralTitle, WidgetsTitle } from '../../../Utils/Constants'
import WebCard from '../../../Utils/CommonComponents/DashboardsCommon/ProjectCommon/WebCard'
import CategoriesBySales from '../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/CategoriesBySales'
import ProjectCreated from '../../../Utils/CommonComponents/DashboardsCommon/ProjectCommon/ProjectCreated'
import BudgetCard from '../../../Utils/CommonComponents/DashboardsCommon/ProjectCommon/BudgetCard'
import OrderOverview_Monthly_InvoiceCards from '../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/OrderOverview_Monthly_InvoiceCards'
import TotalEarningCards from '../../../Utils/CommonComponents/DashboardsCommon/DefaultCommon/TotalEarningCards'
import ActiveTasksCard from '../../../Utils/CommonComponents/DashboardsCommon/DefaultCommon/ActiveTasksCard'
import OnlineOrderCards from '../../../Utils/CommonComponents/DashboardsCommon/EcommerceCommon/OnlineOrderCards'
import Customer_DiscountCards from './Customer_DiscountCards'
import { onlineOrderCardData } from '../../../Data/WidgetsData/GeneralData'

export default function GeneralWidgets() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={GeneralTitle} parent={WidgetsTitle} title={GeneralTitle} />
            <Container fluid className="general-widget">
                <Row>
                    {WebCard()}
                    <CategoriesBySales />
                    <ProjectCreated colClass='col-xl-6 col-lg-6' />
                    <BudgetCard colClass='col-xl-3 col-xl-40 col-lg-4 col-md-12 box-col-4' />
                    <Col xl={6} className="col-xl-70 box-col-8e">
                        <OrderOverview_Monthly_InvoiceCards colClass='col-lg-12 col-md-12 col-sm-6' />
                    </Col>
                    <Customer_DiscountCards />
                    <Col lg={4}>
                        <TotalEarningCards colClass='col-sm-6' />
                    </Col>
                    <ActiveTasksCard colClass='col-xl-4 col-xl-40 col-md-6 box-col-4' />
                    <OnlineOrderCards data={onlineOrderCardData} />
                </Row>
            </Container>
        </Fragment>
    )
}
