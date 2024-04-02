import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { filledTooltipSubTitle, flippedTooltipData } from "../../../../Data/UiKitsData/TooltipData";
import { Fragment, useState } from "react";
import { Btn, ToolTip } from "../../../../AbstractElements";
import { FilledTooltipTitle } from "../../../../Utils/Constants";

export default function FilledTooltip() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={FilledTooltipTitle} subTitle={filledTooltipSubTitle} />
                <CardBody className='fill-tooltip'>
                    <div className='common-flex'>
                        {flippedTooltipData && flippedTooltipData.map((item, index) => (
                            <Fragment key={index}>
                                <Btn outline={true} color={item.class} className='mb-0 me-0' id={`filled_${index}`} onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} target={`filled_${index}`} toggle={() => toggleTooltip(index)}>{item.text}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
