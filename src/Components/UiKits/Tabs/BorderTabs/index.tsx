import { useState } from "react";
import { borderTabsSubTitle } from "../../../../Data/UiKitsData/TabsData";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { BorderTabsTitle } from "../../../../Utils/Constants";
import BorderTabContent from "./BorderTabContent";
import BorderNav from "./BorderNav";

export default function BorderTabs() {
    const [basicTab, setBasicTab] = useState<string>('2');
    
    return (
        <Col xxl={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={BorderTabsTitle} subTitle={borderTabsSubTitle} />
                <CardBody>
                    <BorderNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <BorderTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
