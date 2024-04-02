import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import FlushDemo from "./FlushDemo"
import { flushAccordionSubTitle } from "../../../../Data/UiKitsData/AccordionData"
import { FlushAccordionTitle } from "../../../../Utils/Constants"

export default function FlushAccordion() {

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={FlushAccordionTitle} subTitle={flushAccordionSubTitle} />
                <CardBody>
                    <FlushDemo />
                </CardBody>
            </Card >
        </Col >
    )
}
