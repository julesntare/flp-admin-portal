import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import IconDemo from "./IconDemo"
import { iconAccordionSubTitle } from "../../../../Data/UiKitsData/AccordionData"
import { IconAccordionTitle } from "../../../../Utils/Constants"

export default function IconAccordion() {

    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={IconAccordionTitle} subTitle={iconAccordionSubTitle} />
                <CardBody className="accordion-border icons-accordion">
                    <IconDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
