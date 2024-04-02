import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { BootstrapTabs, TabsTitle } from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import SimpleTab from "./SimpleTab";
import IconTabs from "./IconTabs";
import VerticalTab from "./VerticalTab";
import PillsTab from "./PillsTab";
import JustifyTab from "./JustifyTab";
import MaterialLeftStyleTab from "./MaterialLeftStyleTab";
import MaterialStyleTab from "./MaterialStyleTab";
import BorderTabs from "./BorderTabs";

export default function TabsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BootstrapTabs} parent={TabsTitle} title={BootstrapTabs} />
            <Container fluid>
                <Row>
                    <SimpleTab />
                    <IconTabs />
                    <VerticalTab />
                    <PillsTab />
                    <JustifyTab />
                    <MaterialLeftStyleTab />
                    <MaterialStyleTab />
                    <BorderTabs />
                </Row>
            </Container>
        </Fragment>
    )
}
