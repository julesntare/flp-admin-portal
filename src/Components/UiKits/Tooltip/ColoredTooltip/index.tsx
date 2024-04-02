import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import { colorTooltipData, coloredTooltipSubTitle } from "../../../../Data/UiKitsData/TooltipData";
import { Fragment, useState } from "react";
import { Btn, ToolTip } from "../../../../AbstractElements";
import { ColoredTooltipTitle } from "../../../../Utils/Constants";

export default function ColoredTooltip() {
    const [openIndex, setOpenIndex] = useState<number>(-1);

    const toggleTooltip = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={ColoredTooltipTitle} subTitle={coloredTooltipSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {colorTooltipData && colorTooltipData.map((item, index) => (
                            <Fragment key={index}>
                                <Btn color={item.class} className="mb-0 me-0" id={`color_${index}`} onClick={() => toggleTooltip(index)}>{item.text}</Btn>
                                <ToolTip isOpen={openIndex === index} target={`color_${index}`} toggle={() => toggleTooltip(index)}>{item.text}</ToolTip>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}