import { Col, Row } from "reactstrap";
import { offsetBodyData } from "../../../../Data/UiKitsData/GridData";

export default function OffsetBody() {
    return (
        <Row className="g-2">
            {offsetBodyData && offsetBodyData.map((item, index) => (
                <Col className={item.class} key={index}>
                    <span>{item.text}</span>
                </Col>
            ))}
        </Row>
    )
}
