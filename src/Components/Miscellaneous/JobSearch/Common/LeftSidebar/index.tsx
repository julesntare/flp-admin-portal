import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { JobFilter } from '../../../../../Utils/Constants';
import CommonAccordionCard from './CommonAccordionCard';
import { commonAccordionCardData } from '../../../../../Data/MiscellaneousData/JobSearchData';

export default function LeftSidebar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <Col xl={4} xxl={3} className="box-col-4e">
            <div className="md-sidebar">
                <Btn color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>
                    {JobFilter}
                </Btn>
                <div className={`md-sidebar-aside job-sidebar ${open ? 'open' : ''}`}>
                    <div className="default-according style-1 faq-accordion job-accordion">
                        {commonAccordionCardData.map((items) => (
                            <div className="accordion" key={items.id}>
                                <CommonAccordionCard items={items} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Col>
    )
}
