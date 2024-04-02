import { Card, CardBody, Col } from "reactstrap"
import { Btn, ProgressBar } from "../../../../AbstractElements"
import { progressNumberSubTitle } from "../../../../Data/UiKitsData/ProgressData"
import { ProgressWithNumberTitle } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function ProgressWithNumber() {

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={ProgressWithNumberTitle} subTitle={progressNumberSubTitle} />
                <CardBody>
                    <div className="position-relative m-4 progress-number">
                        <ProgressBar className="progress-wrapper" value={50} />
                        <Btn color="primary" size="sm" className="position-absolute top-0 start-0 translate-middle rounded-circle">{'1'}</Btn>
                        <Btn color="primary" size="sm" className="position-absolute top-0 start-50 translate-middle rounded-circle">{'2'}</Btn>
                        <Btn color="transparent" size="sm" className="progress-btn position-absolute top-0 start-100 translate-middle rounded-circle">{'3'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
