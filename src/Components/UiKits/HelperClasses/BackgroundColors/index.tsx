import { Card, CardBody, Col, Row } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { backgroundColorSubTitle } from "../../../../Data/UiKitsData/HelperClassData"
import DarkBackground from "./DarkBackground"
import LightBackground from "./LightBackground"
import ExtendedBackground from "./ExtendedBackground"

export default function BackgroundColors() {
   
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title='Background Colors' subTitle={backgroundColorSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <DarkBackground />
                        <LightBackground />
                        <ExtendedBackground />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
