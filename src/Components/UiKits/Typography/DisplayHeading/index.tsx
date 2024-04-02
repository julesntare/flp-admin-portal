import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Display, DisplayHeadingSmall, DisplayHeadingTitle, DisplayText2 } from "../../../../Utils/Constants";
import { H1, H2, H3, H4, P } from "../../../../AbstractElements";

export default function DisplayHeading() {
    return (
        <Col xs={12}>
            <Card>
                <CardHeader>
                    <H4 className="mb-0">{DisplayHeadingTitle}</H4>
                    <P className="f-m-light mt-1">
                        {"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "}
                        <mark>{DisplayHeadingSmall}</mark>{DisplayText2}
                    </P>
                </CardHeader>
                <CardBody className='d-flex flex-column gap-2'>
                    <H1 className="display-1">{Display} {'1'}</H1>
                    <H2 className="display-2">{Display} {'2'}</H2>
                    <H3 className="display-3">{Display} {'3'}</H3>
                    <H4 className="display-4">{Display} {'4'}</H4>
                </CardBody>
            </Card>
        </Col>
    )
}