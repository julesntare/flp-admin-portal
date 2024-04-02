import { Card, CardBody, Col } from "reactstrap";
import { BadgesContextualTitle } from "../../../../Utils/Constants";
import { badgesContextualSubTitle, badgesData } from "../../../../Data/UiKitsData/TagAndPillsData";
import { Badges } from "../../../../AbstractElements";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function BadgesContextual() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BadgesContextualTitle} subTitle={badgesContextualSubTitle} />
                <CardBody>
                    <div className="badge-spacing">
                        {badgesData && badgesData.map((item, index) => (
                            <Badges color={item.class} key={index}>{item.text}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
