import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { htmlTooltipData, htmlTooltipSubTitle } from "../../../../Data/UiKitsData/TooltipData";
import { Fragment, useState } from "react";
import { Btn, ToolTip } from "../../../../AbstractElements";
import { HtmlTooltipTitle } from "../../../../Utils/Constants";

export default function HtmlTooltip() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={HtmlTooltipTitle} subTitle={htmlTooltipSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {htmlTooltipData && htmlTooltipData.map((item, index) => (
                            <Fragment key={index}>
                                <Btn color={item.class} className="mb-0 me-0" id={`html_${index}`} onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} target={`html_${index}`} toggle={() => toggleTooltip(index)}>{item.tooltip}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}