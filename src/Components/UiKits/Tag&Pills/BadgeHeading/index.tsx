import { Card, Col } from "reactstrap";
import { BadgeHeadingsExample } from "../../../../Utils/Constants";
import { badgeHeadingSubTitle } from "../../../../Data/UiKitsData/TagAndPillsData";
import BadgeHeadingBody from "./BadgeHeadingBody";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function BadgeHeading() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BadgeHeadingsExample} subTitle={badgeHeadingSubTitle} />
                <BadgeHeadingBody/>
            </Card >
        </Col >
    )
}
