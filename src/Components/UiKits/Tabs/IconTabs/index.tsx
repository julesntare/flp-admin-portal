import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { iconTabsSubTitle } from "../../../../Data/UiKitsData/TabsData";
import { IconTabsTitle } from "../../../../Utils/Constants";
import IconNav from "./IconNav";
import IconTabContent from "./IconTabContent";

export default function IconTabs() {
    const [basicTab, setBasicTab] = useState<string>('1');
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={IconTabsTitle} subTitle={iconTabsSubTitle} />
                <CardBody>
                    <IconNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <IconTabContent tabId={basicTab} />
                </CardBody>
            </Card >
        </Col >
    )
}
