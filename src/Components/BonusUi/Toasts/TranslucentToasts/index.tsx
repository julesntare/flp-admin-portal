import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DunzoTheme, TranslucentToastsTitle } from '../../../../Utils/Constants';
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';
import { translucentToastSubTitle } from '../../../../Data/BonusUiData/ToastsData';
import TranslucentToastsList from './TranslucentToastsList';

export default function TranslucentToasts() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={TranslucentToastsTitle} subTitle={translucentToastSubTitle} />
                <CardBody className='toast-rtl bg-dark'>
                    <div className='toast-container'>
                        <Toast isOpen={open} >
                            <ToastHeader toggle={toggle}
                                icon={ <FeatherIconCom className='toast-icons toast-info' iconName='Disc' />}>
                                <strong className='me-auto'>{DunzoTheme}</strong>
                                <small className='text-muted'>{"11 mins ago"}</small>
                            </ToastHeader>
                            <ToastBody className='toast-dark'>{"Hello, I'm a web-designer."}</ToastBody>
                        </Toast>
                        {TranslucentToastsList()}
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}