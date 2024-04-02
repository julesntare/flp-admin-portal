import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { tooltipDirectionSubTitle, tooltipPosition } from "../../../../Data/UiKitsData/TooltipData";
import { Fragment, useState } from "react";
import { Btn, ToolTip } from "../../../../AbstractElements";
import { TooltipDirectionTitle } from "../../../../Utils/Constants";

export default function TooltipDirection() {
    const [openIndex, setOpenIndex] = useState<number>(-1);

    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={TooltipDirectionTitle} subTitle={tooltipDirectionSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {tooltipPosition && tooltipPosition.map((item, index) => (
                            <Fragment key={index}>
                                <Btn color={item.class} className="mb-0 me-0" id={`direction_${index}`} onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} placement={item.position} target={`direction_${index}`} toggle={() => toggleTooltip(index)}>{item.text}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}