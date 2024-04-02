import { useState } from "react"
import { Card, CardBody, Col, Collapse } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { Btn } from "../../../../AbstractElements"
import { collapesAccordionSubTitle } from "../../../../Data/UiKitsData/AccordionData"
import { ButtonWithEvent, CollapesAccordionTitle, LinkWithHref } from "../../../../Utils/Constants"

export default function CollapesAccordion() {
    const [open, setOpen] = useState(false)

    return (
        <Col md={6} sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={CollapesAccordionTitle} subTitle={collapesAccordionSubTitle} />
                <CardBody className="collapse-accordion">
                    <div className='common-flex'>
                        <Btn color="dark" onClick={() => setOpen(!open)} >{LinkWithHref}</Btn>
                        <Btn color='dark' type="button" onClick={() => setOpen(!open)} >{ButtonWithEvent}</Btn>
                    </div>
                    <Collapse className={`btn-dark ${open && 'show'} mt-3`}>
                        <Card>
                            <CardBody className="mb-0 dark-accordion">
                                {"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."}
                            </CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}
