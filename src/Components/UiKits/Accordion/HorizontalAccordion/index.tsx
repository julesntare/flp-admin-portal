import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { Btn } from "../../../../AbstractElements"
import { useState } from "react"
import { HorizontalAccordionTitle, ToggleWidthCollapse } from "../../../../Utils/Constants"
import { horizontalAccordionSubTitle } from "../../../../Data/UiKitsData/AccordionData"
import HorizontalDemo from "./HorizontalDemo"

export default function HorizontalAccordion() {
    const [open, setOpen] = useState(false)
    
    return (
        <Col md={6} sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={HorizontalAccordionTitle} subTitle={horizontalAccordionSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        <Btn color='secondary' type="button" onClick={() => setOpen(!open)} >{ToggleWidthCollapse}</Btn>
                    </div>
                    <HorizontalDemo open={open} />
                </CardBody>
            </Card>
        </Col>
    )
}
