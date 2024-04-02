import React, { Fragment, useState } from 'react'
import { Card, CardBody, CardHeader, Collapse, Input, Label } from 'reactstrap';
import { Btn, H2 } from '../../../../../AbstractElements';
import { CommonAccordionCardProps } from '../../../../../Types/MiscellaneousType';
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function CommonAccordionCard({ items }: CommonAccordionCardProps) {
    const [open, setOpen] = useState(true);
    const handleClick = () => { setOpen(!open)}

    return (
        <Card>
            <CardHeader>
                <H2 className="mb-0">
                    <Btn color='transparent' className="btn-link d-flex align-items-center gap-2 justify-content-between" onClick={handleClick}>
                        {items.heading} {open ? <ChevronDown /> : <ChevronUp />}
                    </Btn>
                </H2>
            </CardHeader>
            <Collapse isOpen={open}>
                <CardBody className={`animate-chk ${items.id === 1 ? "filter-cards-view" : ""}`}>
                    {items.id === 1 && (
                        <>
                            <div className="job-filter mb-2">
                                <div className="faq-form">
                                    <Input type="text" placeholder="Search.." />
                                    <FeatherIconCom iconName='Search' className="search-icon" />
                                </div>
                            </div>
                            <div className="job-filter">
                                <div className="faq-form">
                                    <Input type="text" placeholder="location.." />
                                    <FeatherIconCom iconName='MapPin' className="search-icon" />
                                </div>
                            </div>
                        </>
                    )}
                    <div className={items.id === 2 ? "location-checkbox" : "checkbox-animated"}>
                        {items.data.map((element, i) => (
                            <Fragment key={i}>
                                <Label className="d-block" htmlFor={element.id}>
                                    <Input className="checkbox_animated" id={element.id} type="checkbox" /> {element.title}
                                    {element.subTitle && <span className="d-block">{element.subTitle}</span>}
                                </Label>
                            </Fragment>
                        ))}
                    </div>
                    <Btn className={`text-center ${items.id !== 1 ? "mt-4" : ""}`} color="primary">
                        {items.buttonTitle}
                    </Btn>
                </CardBody>
            </Collapse>
        </Card>
    )
}
