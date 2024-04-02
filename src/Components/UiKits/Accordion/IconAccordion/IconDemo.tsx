import { useState } from "react";
import { iconDemoData } from "../../../../Data/UiKitsData/AccordionData";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import FeatherIconCom from "../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom";

export default function IconDemo() {
    const [open, setOpen] = useState('')
    const toggle = (id: string) => id !== open ? setOpen(id) : setOpen('');

    return (
        //@ts-ignore
        <Accordion className="dark-accordion" open={open} toggle={toggle}>
            {iconDemoData && iconDemoData.map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader className="gap-2 bg-light-secondary txt-secondary" targetId={item.id}>
                        <FeatherIconCom className="svg-wrapper txt-secondary me-2" iconName={item.icon} />
                        <div className="txt-secondary">{item.head}</div>
                        <FeatherIconCom iconName={open === item.id ? 'ChevronUp' : 'ChevronDown'} className='svg-color txt-secondary' />
                    </AccordionHeader>
                    <AccordionBody accordionId={item.id}>
                        <div className="txt-secondary">{item.text}</div>
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
