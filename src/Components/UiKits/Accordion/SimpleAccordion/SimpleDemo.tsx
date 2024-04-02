import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';
import { ElementsWebDesign, UseWebDesign, WebDesignersDo } from '../../../../Utils/Constants';
import { LI, P, UL } from '../../../../AbstractElements';
import { elementsWebDesignList } from '../../../../Data/UiKitsData/AccordionData';

export default function SimpleDemo() {
    const [open, setOpen] = useState('1');

    const toggle = (id: string) => {
        open === id ? setOpen('') : setOpen(id);
    };
    return (
        //@ts-ignore
        <Accordion open={open} toggle={toggle} className='dark-accordion'>
            <AccordionItem>
                <AccordionHeader className='bg-light-primary font-primary' targetId="1">
                    <div className='font-primary'>{WebDesignersDo}</div>
                    <FeatherIconCom iconName={open === '1' ? 'ChevronUp' : 'ChevronDown'} className='svg-color font-primary' />
                </AccordionHeader>
                <AccordionBody accordionId="1">
                    <P>{'Web design'}<em className="txt-danger"> {'identifies the goals'}</em> {'of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.'}</P>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader className='bg-light-primary font-primary' targetId="2">
                    <div className='font-primary'>{UseWebDesign}</div>
                    <FeatherIconCom iconName={open === '2' ? 'ChevronUp' : 'ChevronDown'} className='svg-color font-primary' />
                </AccordionHeader>
                <AccordionBody accordionId="2">
                    <P className="mb-3"><strong> {'Search engine optimization:'} </strong> {'Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it.'}</P>
                    <P className="mb-3"><strong> {'Mobile responsiveness:'}</strong> {'Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease.'}</P>
                    <P><strong> {'Improved sales:'}</strong>{'Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales.'}</P>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader className='bg-light-primary font-primary' targetId="3">
                    <div className='font-primary'>{ElementsWebDesign}</div>
                    <FeatherIconCom iconName={open === '3' ? 'ChevronUp' : 'ChevronDown'} className='svg-color font-primary' />
                </AccordionHeader>
                <AccordionBody accordionId="3">
                    <P>{'The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:'}</P>
                    <UL className="d-flex flex-column gap-2 accordions-content simple-list">
                        {elementsWebDesignList.map((list, index) => (
                            <LI key={index}>{list.text}</LI>
                        ))}
                    </UL>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}

