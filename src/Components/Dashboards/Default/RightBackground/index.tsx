import React from "react";
import { Col, Row } from "reactstrap";
import RecentOrder from "./RecentOrder";
import SalesStatistic from "./SalesStatistic";
import CustomerCard from "../../../../Utils/CommonComponents/DashboardsCommon/DefaultCommon/CustomerCard";
import { customerCardData } from "../../../../Data/DashboardsData/DefaultData";
import SalesOverview from "./SalesOverview";

export default function RightBackground() {
  return (
    <Col xl={12} className="col-xl-100 box-col-12">
      <Row>
        <CustomerCard data={customerCardData} />
        <RecentOrder />
        <SalesStatistic />
        <SalesOverview />
      </Row>
    </Col>
  );
}
