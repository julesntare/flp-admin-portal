import { Card, CardBody, Col, Row } from "reactstrap"
import { ProgressStriped } from "../../../../Utils/Constants"
import { stripedProgressData, stripedProgressSubTitle } from "../../../../Data/UiKitsData/ProgressData"
import { ProgressBar } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function StripedProgress() {

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={ProgressStriped} subTitle={stripedProgressSubTitle} />
                <CardBody>
                    <Row className='progress-showcase'>
                        <Col>
                            {stripedProgressData && stripedProgressData.map((item, index) => (
                                <ProgressBar key={index} color={item.class} value={item.value} striped />
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
