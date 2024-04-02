import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import MaterialStyleNav from "./MaterialStyleNav";
import MaterialStyleContent from "./MaterialStyleContent";
import { MaterialStyleTabTitle } from "../../../../Utils/Constants";
import { materialStyleSubTitle } from "../../../../Data/UiKitsData/TabsData";

export default function MaterialStyleTab() {
    const [basicTab, setBasicTab] = useState<string>('1');
    
    return (
        <Col xxl={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={MaterialStyleTabTitle} subTitle={materialStyleSubTitle} />
                <CardBody>
                    <MaterialStyleNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <MaterialStyleContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
