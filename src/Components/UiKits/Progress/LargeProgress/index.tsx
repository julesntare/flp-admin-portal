import { Card, CardBody, Col, Row } from "reactstrap"
import { largeProgressData, largeProgressSubTitle } from "../../../../Data/UiKitsData/ProgressData"
import { LargeProgressTitle } from "../../../../Utils/Constants"
import { ProgressBar } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function LargeProgress() {

    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass="pb-0" title={LargeProgressTitle} subTitle={largeProgressSubTitle} />
                <CardBody>
                    <Row className='progress-showcase'>
                        <Col>
                            {largeProgressData && largeProgressData.map((item, index) => (
                                <ProgressBar color={item.class} value={item.value} className="lg-progress-bar" key={index}>
                                    {item.value}{'%'}
                                </ProgressBar>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
