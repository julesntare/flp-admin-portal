import { Card, CardBody, Col, Row } from "reactstrap"
import { multipleBarData, multipleBarsSubTitle } from "../../../../Data/UiKitsData/ProgressData"
import { MultipleBarsTitle } from "../../../../Utils/Constants"
import { ProgressBar } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function MultipleBars() {

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={MultipleBarsTitle} subTitle={multipleBarsSubTitle} />
                <CardBody>
                    <Row className='progress-showcase'>
                        <Col>
                            {multipleBarData && multipleBarData.map((item, index) => (
                                <ProgressBar key={index} multi>
                                    {item.data && item.data.map((item, index) => (
                                        <ProgressBar key={index} value={item.value} color={item.class} bar/>
                                    ))}
                                </ProgressBar>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}