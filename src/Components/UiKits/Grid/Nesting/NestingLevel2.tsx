import { Col, Row } from 'reactstrap'
import { Level2col5, Level2col7 } from '../../../../Utils/Constants';

function NestingLevel2 () {
    return (
        <Col xs={9}>
            <div className="grid-wrapper pb-0">
                <Row className="g-2">
                    <Col xs={5}>
                        <span className="border border-2">{Level2col5}</span>
                    </Col>
                    <Col xs={7}>
                        <span className="border border-2">{Level2col7}</span>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
export default NestingLevel2;