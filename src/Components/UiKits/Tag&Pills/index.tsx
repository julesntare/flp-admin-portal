import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { TagAndPillsTitle, UiKits } from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import BadgesContextual from "./BadgesContextual";
import PillsContextual from "./PillsContextual";
import NumberBadges from "./NumberBadges";
import NumberPills from "./NumberPills";
import BadgeWithIcon from "./BadgeWithIcon";
import RoundedPillsIcon from "./RoundedPillsIcon";
import BadgeHeading from "./BadgeHeading";
import BadgeButton from "./BadgeButton";

export default function TagAndPillsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={TagAndPillsTitle} parent={UiKits} title={TagAndPillsTitle} />
            <Container fluid>
                <Row>
                    <BadgesContextual/>
                    <PillsContextual/>
                    <NumberBadges/>
                    <NumberPills/>
                    <BadgeWithIcon/>
                    <RoundedPillsIcon/>
                    <BadgeHeading/>    
                    <BadgeButton/>
                </Row>
            </Container>
        </Fragment>
    )
}
