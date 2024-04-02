import { Col, Row } from 'reactstrap'
import { Onecolumn, Twocolumn } from '../../../../Utils/Constants'

function HorizontalStart () {
    return (
        <Row className="justify-content-start bg-light">
            <Col xs={5}>
                <span>{Onecolumn}</span>
            </Col>
            <Col xs={5}>
                <span>{Twocolumn}</span>
            </Col>
        </Row>
    )
}
export default HorizontalStart;