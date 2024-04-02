import { useState } from "react";
import { Btn } from "../../../../AbstractElements";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { PopoverOnLeft, PopoverOnLeftText, PopoveroffsetDash50 } from "../../../../Utils/Constants";

export default function OffsetLeft() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    return (
        <>
            <Btn color='success' className="mb-0 me-0" id='offset' onClick={toggle} >{PopoveroffsetDash50}</Btn>
            <Popover placement="left" isOpen={popover} target="offset" toggle={toggle} offset={[-50, 0]}>
                <PopoverHeader>{PopoverOnLeft}</PopoverHeader>
                <PopoverBody>{PopoverOnLeftText}</PopoverBody>
            </Popover>
        </>
    )
}
