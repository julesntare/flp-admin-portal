import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import OutlineDemo from "./OutlineDemo"
import { outlineAccordionSubTitle } from "../../../../Data/UiKitsData/AccordionData"

export default function OutlineAccordion() {

    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader title='Outline Accordion' subTitle={outlineAccordionSubTitle} />
                <CardBody>
                    <OutlineDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
