import { Card, CardBody, Col, Row } from "reactstrap"
import { BordersAndDisplaysTitle } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import AdditiveBorder from "./AdditiveBorder"
import SubtractiveBorder from "./SubtractiveBorder"
import AdditiveRadius from "./AdditiveRadius"
import { bordersAndDisplaySubTitle } from "../../../../Data/UiKitsData/HelperClassData"

export default function BordersAndDisplays() {
    
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BordersAndDisplaysTitle} subTitle={bordersAndDisplaySubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <AdditiveBorder />
                        <SubtractiveBorder />
                        <AdditiveRadius />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
