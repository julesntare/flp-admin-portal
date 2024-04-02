import { Card, CardBody, Col, Row } from "reactstrap";
import { BasicProgressBars } from "../../../../Utils/Constants";
import { basicProgressData, basicProgressSubTitle } from "../../../../Data/UiKitsData/ProgressData";
import { ProgressBar } from "../../../../AbstractElements";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function BasicProgress() {
    return (
        <Card>
            <CommonCardHeader headClass="pb-0" title={BasicProgressBars} subTitle={basicProgressSubTitle} />
            <CardBody>
                <Row className="progress-showcase">
                    <Col>
                        {basicProgressData && basicProgressData.map((item, index) => (
                                <ProgressBar key={index} color={item.class} value={item.value} >{item.value}{'%'}</ProgressBar>
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
