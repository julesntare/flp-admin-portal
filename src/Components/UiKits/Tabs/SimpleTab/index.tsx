import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { simpleTabSubTitle } from "../../../../Data/UiKitsData/TabsData";
import SimpleNav from "./SimpleNav";
import SimpleTabContent from "./SimpleTabContent";
import { SimpleTabTitle } from "../../../../Utils/Constants";

export default function SimpleTab() {
    const [basicTab, setBasicTab] = useState<string>('2');
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={SimpleTabTitle} subTitle={simpleTabSubTitle} />
                <CardBody>
                    <SimpleNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <SimpleTabContent tabId={basicTab} />
                </CardBody>
            </Card >
        </Col >
    )
}
