import { Card, CardBody, Col } from "reactstrap"
import { alertWithIconSubTitle } from "../../../../Data/UiKitsData/AlertData"
import { AlertWithIconsTitle } from "../../../../Utils/Constants"
import TimeAlert from "./TimeAlert"
import HeartAlert from "./HeartAlert"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function AlertWithIcons() {

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={AlertWithIconsTitle} subTitle={alertWithIconSubTitle} />
                <CardBody className='dark-txt'>
                    <TimeAlert />
                    <HeartAlert />
                </CardBody>
            </Card >
        </Col >
    )
}
