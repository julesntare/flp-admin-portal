import { useState } from "react";
import { Btn } from "../../../../AbstractElements";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { PopoverOffsetText, Popoveroffset50, Popovertitle } from "../../../../Utils/Constants";

export default function OffsetRight() {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    return (
        <>
            <Btn color='secondary' className="mb-0 me-0" id='PopoverOffset' onClick={toggle} >{Popoveroffset50}</Btn>
            <Popover placement="right" isOpen={popover} target="PopoverOffset" toggle={toggle} offset={[50, 0]}>
                <PopoverHeader>{Popovertitle}</PopoverHeader>
                <PopoverBody>{PopoverOffsetText}</PopoverBody>
            </Popover>
        </>
    )
}
