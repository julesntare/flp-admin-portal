import { Col, Row } from 'reactstrap'
import { Onecolumn, Twocolumn } from '../../../../Utils/Constants';

function HorizontalCenter () {
    return (
        <Row className="justify-content-center bg-light">
            <Col xs={5}>
                <span>{Onecolumn}</span>
            </Col>
            <Col xs={5}>
                <span>{Twocolumn}</span>
            </Col>
        </Row>
    )
}
export default HorizontalCenter;