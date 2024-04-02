import { Col, Row } from "reactstrap";
import { gridOrderBodyData } from "../../../../Data/UiKitsData/GridData";

export default function OrderBody() {
    return (
        <Row className="g-2">
            {gridOrderBodyData && gridOrderBodyData.map((item, index) => (
                <Col className={item.class} key={index}>
                    <span>{item.text}</span>
                </Col>
            ))}
        </Row>
    )
}
