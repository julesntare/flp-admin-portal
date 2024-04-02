import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, LI, UL } from '../../../../AbstractElements';
import { FileFilter } from '../../../../Utils/Constants';
import { fileSidebarButton } from '../../../../Data/AppsData/FileManagerData';
import Storage from './Storage';
import PricingPlan from './PricingPlan';

export default function FileSidebar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <Col xl={3} className="box-col-30">
            <div className="md-sidebar job-sidebar">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{FileFilter}</Btn>
                <div className={`md-sidebar-aside custom-scrollbar ${open ? "open" : ""}`}>
                    <div className="file-sidebar">
                        <Card>
                            <CardBody>
                                <UL className='simple-list'>
                                    {fileSidebarButton.map((data) => (
                                        <LI key={data.id}>
                                            <Btn color={data.id === 1 ? 'primary' : 'light'}>
                                                {data.icon} {data.text}
                                            </Btn>
                                        </LI>
                                    ))}
                                </UL> <hr />
                                <Storage /> <hr />
                                <PricingPlan />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </Col>
    )
}
