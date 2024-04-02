import { Col, Row } from 'reactstrap'
import { onecolumn, twocolumn } from '../../../../Utils/Constants'

function VerticalStart () {
    return (
        <Col lg={4}>
            <Row className="grid-vertical align-items-start m-1 g-2">
                <Col xs={6}>
                    <span>{onecolumn}</span>
                </Col>
                <Col xs={6}>
                    <span>{twocolumn}</span>
                </Col>
            </Row>
        </Col>

    )
}
export default VerticalStart;