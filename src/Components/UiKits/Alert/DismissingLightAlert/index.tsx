import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Alerts, Btn, P } from "../../../../AbstractElements";
import { dismissAlertSubTitle } from "../../../../Data/UiKitsData/AlertData";
import { DismissingLightAlertTitle } from "../../../../Utils/Constants";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import FeatherIconCom from "../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom";

export default function DismissingLightAlert() {
    const [active, setActive] = useState<boolean>(true);

    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal' >
                <CommonCardHeader headClass="pb-0" title={DismissingLightAlertTitle} subTitle={dismissAlertSubTitle} />
                <CardBody>
                    <Alerts color='warning' className={`alert-dismissible fade ${active ? 'show' : 'd-none'}`}>
                        <FeatherIconCom iconName='Bell' />
                        <P>{"Hidden content You should check in on some of those fields below."}</P>
                        <Btn color='transperant' className="btn-close" type="button" onClick={() => { setActive(false) }} />
                    </Alerts>
                </CardBody>
            </Card >
        </Col >
    )
}
