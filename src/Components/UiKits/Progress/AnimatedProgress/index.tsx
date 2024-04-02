import { Card, CardBody, Col, Row } from 'reactstrap'
import { ProgressAnimated } from '../../../../Utils/Constants'
import { animetedProgressSubTitle, stripedProgressData } from '../../../../Data/UiKitsData/ProgressData'
import { ProgressBar } from '../../../../AbstractElements'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'

export default function AnimatedProgress() {

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ProgressAnimated} subTitle={animetedProgressSubTitle} />
                <CardBody>
                    <Row className=' progress-showcase'>
                        <Col>
                            {stripedProgressData && stripedProgressData.map((item, index) => (
                                <ProgressBar key={index} color={item.class} value={item.value} striped animated />
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}