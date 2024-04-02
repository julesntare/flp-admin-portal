import { useState } from "react"
import { outlineData } from "../../../../Data/UiKitsData/AccordionData"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap"
import FeatherIconCom from "../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom"

export default function OutlineDemo() {
    const [open, setOpen] = useState('')
    const toggle = (id: string) => { open === id ? setOpen('') : setOpen(id) }

    return (
        //@ts-ignore
        <Accordion open={open} toggle={toggle} className='dark-accordion'>
            {outlineData && outlineData.map((item, index) => (
                <AccordionItem className="accordion-wrapper" key={index}>
                    <AccordionHeader className="bg-light-primary txt-primary" targetId={item.id}>
                        <div className="txt-primary">{item.head}</div>
                        <FeatherIconCom iconName={open === item.id ? 'ChevronUp' : 'ChevronDown'} className='svg-color txt-primary' />
                    </AccordionHeader>
                    <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

