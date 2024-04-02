import { Card, CardBody, Col } from "reactstrap"
import { outlineAlertSubTitle } from "../../../../Data/UiKitsData/AlertData"
import LightOutline from "./LightOutline"
import DarkOutline from "./DarkOutline"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function OutlineAlert() {

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title='Outline Dark And Light Alerts' subTitle={outlineAlertSubTitle} />
                <CardBody>
                    <LightOutline />
                    <DarkOutline />
                </CardBody>
            </Card >
        </Col >
    )
}
