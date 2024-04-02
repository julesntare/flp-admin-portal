import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { materialLeftSubTitle } from "../../../../Data/UiKitsData/TabsData";
import { MaterialLeftStyleTabTitle } from "../../../../Utils/Constants";
import MaterialLeftNav from "./MaterialLeftNav";
import MaterialContent from "./MaterialContent";

export default function MaterialLeftStyleTab() {
    const [basicTab, setBasicTab] = useState<string>('1');
    
    return (
        <Col xxl={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={MaterialLeftStyleTabTitle} subTitle={materialLeftSubTitle} />
                <CardBody>
                    <div className='tabs-responsive-side'>
                        <div className='material-wrapper'>
                            <MaterialLeftNav basicTab={basicTab} setBasicTab={setBasicTab} />
                            <div className='material-content'>
                                <MaterialContent tabId={basicTab} />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

