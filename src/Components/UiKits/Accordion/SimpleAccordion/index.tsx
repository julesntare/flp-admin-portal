import { Card, CardBody, Col } from "reactstrap";
import { simpleAccordionSubTitle } from "../../../../Data/UiKitsData/AccordionData";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { SimpleAccordionTitle } from "../../../../Utils/Constants";
import SimpleDemo from "./SimpleDemo";

export default function SimpleAccordion() {

    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal' >
                <CommonCardHeader headClass="pb-0" title={SimpleAccordionTitle} subTitle={simpleAccordionSubTitle} />
                <CardBody>
                    <div className='simple-Accordion'>
                        <SimpleDemo />
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
