import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { AvatarsTitle, UiKits } from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import AvatarSizes from "./AvatarSizes";
import StatusIndicator from "./StatusIndicator";
import Shapes from "./Shapes";
import Ratio from "./Ratio";
import Grouping from "./Grouping";

export default function AvatarsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AvatarsTitle} parent={UiKits} title={AvatarsTitle} />
            <Container fluid>
                <div className="user-profile">
                    <Row>
                        <AvatarSizes/>
                        <StatusIndicator/>
                        <Shapes/>
                        <Ratio/>
                        <Grouping/>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}