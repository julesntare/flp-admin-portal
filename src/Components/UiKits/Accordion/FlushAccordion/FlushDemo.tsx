import { useState } from "react";
import { flushData } from "../../../../Data/UiKitsData/AccordionData";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";

export default function FlushDemo() {
    const [open, setOpen] = useState('flush1')

    const toggle = (id: string) => open === id ? setOpen('') : setOpen(id);
    return (
        //@ts-ignore
        <Accordion open={open} toggle={toggle} className='dark-accordion' flush={true}>
            {flushData && flushData.map((data, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader className="text-success bg-light-success" targetId={data.id}>
                        <div className="text-success">{data.head}</div>
                    </AccordionHeader>
                    <AccordionBody accordionId={data.id}>
                        <UL className="d-flex flex-column gap-1 accordions-content simple-list">
                            {data.child.map((item, index) => (
                                <LI key={index}>{item.text}</LI>
                            ))}
                        </UL>
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    )
}