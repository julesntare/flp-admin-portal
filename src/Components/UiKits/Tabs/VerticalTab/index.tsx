import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { useState } from "react";
import { VerticalTabTitle } from "../../../../Utils/Constants";
import { verticalTabSubTitle } from "../../../../Data/UiKitsData/TabsData";
import VerticalNav from "./VerticalNav";
import VerticalTabContent from "./VerticalTabContent";

export default function VerticalTab() {
    const [basicTab, setBasicTab] = useState<string>('2');

    return (
        <Col sm={12} xxl={6}>
            <Card className='height-equal' >
                <CommonCardHeader headClass="card-no-border pb-0" title={VerticalTabTitle} subTitle={verticalTabSubTitle} />
                <CardBody>
                    <Row>
                        <Col md={4} xs={12}>
                            <VerticalNav basicTab={basicTab} setBasicTab={setBasicTab} />
                        </Col>
                        <Col md={8} xs={12}>
                            <VerticalTabContent tabId={basicTab} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
