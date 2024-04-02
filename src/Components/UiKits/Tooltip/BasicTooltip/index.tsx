import { useState } from "react"
import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { Btn, H3, P, ToolTip } from "../../../../AbstractElements"
import { BasicTooltipText, BasicTooltipTitle, InlineTooltipContent, InlineTooltipText, InsideText, SurpriseText, Tooltip } from "../../../../Utils/Constants"
import { basicTooltipSubTitle } from "../../../../Data/UiKitsData/TooltipData"
import { TooltipState } from "../../../../Types/UiKitsType"

export default function BasicTooltip() {
    const [state, setState] = useState<TooltipState>({ tooltip1: false, tooltip2: false, tooltip3: false,});
    const toggleTooltip = (key: keyof TooltipState) => {
        setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
    };
    const toggleTooltip1 = () => toggleTooltip('tooltip1');
    const toggleTooltip2 = () => toggleTooltip('tooltip2');
    const toggleTooltip3 = () => toggleTooltip('tooltip3');

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BasicTooltipTitle} subTitle={basicTooltipSubTitle} />
                <CardBody>
                    <Btn color='primary' className="example-popover mb-0 me-0" id='TooltipExample'>{BasicTooltipText}</Btn>
                    <ToolTip placement='top' isOpen={state.tooltip1} target='TooltipExample' toggle={toggleTooltip1}>
                        {SurpriseText}
                    </ToolTip>
                    <H3 className="mb-1 py-4 pb-0">{InlineTooltipContent}</H3>
                    <P> {InlineTooltipText}
                        <a className="txt-primary fw-bold" id='Tooltip1'>  {Tooltip}</a> {InsideText}
                        <Btn color='success' id='Tooltip2' className="text-white border-0 ms-1 px-3 py-1 me-0 mb-0">{'button'}</Btn>
                        {".Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
                    </P>
                    <ToolTip placement='top' isOpen={state.tooltip2} target='Tooltip1' toggle={toggleTooltip2}>
                        {'Popover text'}
                    </ToolTip>
                    <ToolTip placement='top' isOpen={state.tooltip3} target='Tooltip2' toggle={toggleTooltip3}>
                        {'button'}
                    </ToolTip>
                </CardBody>
            </Card >
        </Col >
    )
}
