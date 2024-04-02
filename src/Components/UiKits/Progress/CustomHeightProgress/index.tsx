import { Card, CardBody, Col, Row } from "reactstrap";
import { customHeightData, customSubTitle } from "../../../../Data/UiKitsData/ProgressData";
import { CustomHeightProgressTitle } from "../../../../Utils/Constants";
import { ProgressBar } from "../../../../AbstractElements";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function CustomHeightProgress() {
    return (
        <Card>
            <CommonCardHeader headClass="pb-0" title={CustomHeightProgressTitle} subTitle={customSubTitle} />
            <CardBody>
                <Row className="progress-showcase">
                    <Col>
                        {customHeightData && customHeightData.map((item, index) => (
                            <ProgressBar color={item.class} value={item.value} style={{ height: item.text }} key={index} />
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
