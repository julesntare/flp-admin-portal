import { Card, CardBody, CardHeader, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { DunzoProfile, JustifyTabTitle } from "../../../../Utils/Constants";
import { useState } from "react";
import { P } from "../../../../AbstractElements";
import JustifyNav from "./JustifyNav";
import { justifyTabSubTitle } from "../../../../Data/UiKitsData/TabsData";
import JustifyTabContent from "./JustifyTabContent";

export default function JustifyTab() {
    const [basicTab, setBasicTab] = useState<string>('2');

    return (
        <Col xxl={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={JustifyTabTitle} subTitle={justifyTabSubTitle} />
                <CardBody>
                    <CardHeader className='d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0'>
                        <P> <em className="txt-danger">{DunzoProfile}</em></P>
                        <JustifyNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    </CardHeader>
                    <CardBody className='px-0 pb-0'>
                        <JustifyTabContent tabId={basicTab} />
                    </CardBody>
                </CardBody>
            </Card>
        </Col>
    )
}
