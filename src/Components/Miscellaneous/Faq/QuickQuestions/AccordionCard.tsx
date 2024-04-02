import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { ChevronDown, ChevronUp, HelpCircle } from 'react-feather';
import { AccordionCardType } from '../../../../Types/MiscellaneousType';

export default function AccordionCard({ item }: AccordionCardType) {
    const [isActivity, setIsActivity] = useState(false);
    const handelChange = () => {
        setIsActivity(!isActivity);
    };
    return (
        <Card>
            <CardHeader>
                <H5 className="mb-0">
                    <Btn color='transparent' className="btn-link ps-0  d-flex align-items-center gap-2 justify-content-between" onClick={handelChange}>
                        <span className="d-flex align-items-center gap-2"><HelpCircle />{item.title}</span>
                        {isActivity ? (
                            <ChevronDown className="position-relative inset-0 m-0" />
                        ) : (
                            <ChevronUp className="position-relative inset-0 m-0" />
                        )}
                    </Btn>
                </H5>
            </CardHeader>
            <Collapse isOpen={isActivity}>
                <CardBody>{item.paragraph}</CardBody>
            </Collapse>
        </Card>
    )
}
