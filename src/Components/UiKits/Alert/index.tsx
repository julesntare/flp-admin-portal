import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { AlertTitle, UiKits } from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import LinkDarkColor from "./LinkDarkColor";
import LinkLightColor from "./LinkLightColor";
import OutlineAlert from "./OutlineAlert";
import AlertWithIcons from "./AlertWithIcons";
import DismissingDarkAlert from "./DismissingDarkAlert";
import DismissingLightAlert from "./DismissingLightAlert";
import LiveAlert from "./LiveAlert";
import LeftBorderAlert from "./LeftBorderAlert";
import AdditionalAlert from "./AdditionalAlert";

export default function AlertContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AlertTitle} parent={UiKits} title={AlertTitle} />
            <Container fluid>
                <Row>
                    <LinkDarkColor />
                    <LinkLightColor />
                    <OutlineAlert />
                    <AlertWithIcons />
                    <DismissingDarkAlert />
                    <DismissingLightAlert />
                    <LiveAlert />
                    <LeftBorderAlert />
                    <AdditionalAlert />
                </Row>
            </Container>
        </Fragment>
    )
}
