import { Col, Row } from 'reactstrap'
import { Level1col10, Level1col2 } from '../../../../Utils/Constants';

function NestingLevel3 () {
    return (
        <Col xs={8}>
            <div className="grid-wrapper pb-0">
                <Row className="g-2">
                    <Col sm={2} xs={4}>
                        <span className="border border-2">{Level1col2}</span>
                    </Col>
                    <Col sm={10} xs={8}>
                        <span className="border border-2">{Level1col10}</span>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
export default NestingLevel3;