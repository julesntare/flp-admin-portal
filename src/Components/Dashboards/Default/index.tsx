import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import {
  DashboardTitle,
  DefaultDashboardTitle,
  DefaultTitle,
} from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import RightBackground from "./RightBackground";

export default function DefaultDashboard() {
  return (
    <Fragment>
      <Breadcrumbs
        pageTitle={DefaultDashboardTitle}
        parent={DashboardTitle}
        title={DefaultTitle}
      />
      <Container className="default-dashboard" fluid>
        <Row>
          <RightBackground />
        </Row>
      </Container>
    </Fragment>
  );
}
