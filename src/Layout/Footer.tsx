import { Col, Container, Row } from "reactstrap";
import { P } from "../AbstractElements";
import { FooterText } from "../Utils/Constants";

export default function FooterLayout() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={6} className="p-0 footer-copyright">
            <P className="mb-0">{FooterText}</P>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
