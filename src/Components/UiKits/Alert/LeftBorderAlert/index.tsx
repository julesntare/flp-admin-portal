import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Alerts, Btn, P } from "../../../../AbstractElements";
import { LeftBarText, LeftBorderAlertTitle } from "../../../../Utils/Constants";
import { leftBorderAlertSubTitle } from "../../../../Data/UiKitsData/AlertData";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import FeatherIconCom from "../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom";

export default function LeftBorderAlert() {
    const [active, setActive] = useState<boolean>(true);
    
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass="pb-0" title={LeftBorderAlertTitle} subTitle={leftBorderAlertSubTitle} />
                <CardBody className='live-dark'>
                    <Alerts color='light-dark' className={`light alert-dismissible fade text-dark border-left-wrapper ${active ? 'show' : 'd-none'}`}>
                        <FeatherIconCom iconName='HelpCircle' />
                        <P className="txt-dark">{LeftBarText}</P>
                        <Btn color='transperant' className="btn-close" type="button" onClick={() => { setActive(false) }} />
                    </Alerts>
                </CardBody>
            </Card>
        </Col>
    )
}
