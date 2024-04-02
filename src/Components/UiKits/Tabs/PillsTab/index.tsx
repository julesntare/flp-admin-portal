import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import PillNav from "./PillNav";
import PillTabContent from "./PillTabContent";
import { pillsTabSubTitle } from "../../../../Data/UiKitsData/TabsData";
import { PillsTabTitle } from "../../../../Utils/Constants";

export default function PillsTab() {
    const [basicTab, setBasicTab] = useState<string>('3');
    
    return (
        <Col sm={12} xxl={6}>
            <Card className='height-equal' >
                <CommonCardHeader headClass="card-no-border pb-0" title={PillsTabTitle} subTitle={pillsTabSubTitle} />
                <CardBody>
                    <PillNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <PillTabContent tabId={basicTab} />
                </CardBody>
            </Card >
        </Col >
    )
}
