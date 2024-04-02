import { Fragment, useState } from "react";
import { Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { popoverDirectionSubTitle, popoverPositions } from "../../../../Data/UiKitsData/PopoverData";
import CommonPopover from "../../../../Utils/CommonComponents/UiKitsCommon/CommonPopover";
import { PopoverDirectionTitle, PopoverOnTop, PopoverOnTopText } from "../../../../Utils/Constants";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function PopoverDirection() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={PopoverDirectionTitle} subTitle={popoverDirectionSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <Btn color='warning' className="example-popover mb-0 me-0" id='TopPopover' onClick={toggle}>{PopoverOnTop}</Btn>
                    <Popover placement="top" isOpen={popover} target="TopPopover" toggle={toggle}>
                        <PopoverHeader>{PopoverOnTop}</PopoverHeader>
                        <PopoverBody>{PopoverOnTopText}</PopoverBody>
                    </Popover>
                    {popoverPositions && popoverPositions.map((item, index) => (
                        <Fragment key={index}>
                            <CommonPopover data={item} />
                        </Fragment>
                    ))}
                </CardBody>
            </Card >
        </Col >
    )
}
