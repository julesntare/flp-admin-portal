import { Card, CardBody, Col, Row } from "reactstrap"
import { smallProgressData, smallProgressSubTitle } from "../../../../Data/UiKitsData/ProgressData"
import { SmallProgressTitle } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function SmallProgress() {

    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass="pb-0" title={SmallProgressTitle} subTitle={smallProgressSubTitle} />
                <CardBody>
                    <Row className='progress-showcase progress-b-space'>
                        <Col>
                            {smallProgressData && smallProgressData.map((item, index) => (
                                <div className="progress sm-progress-bar overflow-visible mt-4" key={index}>
                                    <div className="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped" role="progressbar" style={{ width: item.value }}>
                                        <span className="txt-primary progress-label">{item.text}</span>
                                        <span className="animate-circle" />
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
