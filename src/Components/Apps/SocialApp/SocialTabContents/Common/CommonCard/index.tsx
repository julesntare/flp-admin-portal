import React, { useState } from 'react'
import { Card, CardHeader, Collapse } from 'reactstrap';
import { Btn, H2 } from '../../../../../../AbstractElements';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CommonCardProps } from '../../../../../../Types/SocialAppType';

export default function CommonCard({title,children}: CommonCardProps) {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Card>
            <CardHeader>
                <H2 className="mb-0">
                    <Btn color='link' className='btn-block d-flex justify-content-between text-start' onClick={toggle}>{title}
                        {collapsed ? <ChevronDown className='m-0' /> : <ChevronUp className='m-0' />}
                    </Btn>
                </H2>
            </CardHeader>
            <Collapse isOpen={collapsed}>
                {children}
            </Collapse>
        </Card>
    )
}
