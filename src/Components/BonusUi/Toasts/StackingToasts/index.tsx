import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import StackingToastsLists from './StackingToastsLists';
import { DunzoTheme, StackingToastsTitle } from '../../../../Utils/Constants';
import { stackingToastsSubTitle } from '../../../../Data/BonusUiData/ToastsData';
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

export default function StackingToasts() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={StackingToastsTitle} subTitle={stackingToastsSubTitle} />
                <CardBody className='toast-rtl'>
                    <div className='toast-container position-static'>
                        <Toast isOpen={open}>
                            <ToastHeader
                                toggle={toggle}
                                icon={<FeatherIconCom className='toast-icons toast-primary' iconName='Bell' /> }>
                                <strong className='me-auto'>{DunzoTheme}</strong>
                                <small className='txt-danger'>{"just now"}</small>
                            </ToastHeader>
                            <ToastBody className='toast-dark'>{"Hello, I'm a web-designer."}</ToastBody>
                        </Toast>
                        {StackingToastsLists()}
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}