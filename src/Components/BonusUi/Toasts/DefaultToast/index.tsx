import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DefaultToastTitle, DunzoTheme } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import { colorsSchemeSubTitle } from '../../../../Data/BonusUiData/ToastsData';
import { dynamicImage } from '../../../../Utils';

export default function DefaultToast() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6}>
            <Card className='height-equal'>
                <CommonCardHeader title={DefaultToastTitle} subTitle={colorsSchemeSubTitle} />
                <CardBody className='toast-rtl'>
                    <Toast className='default-show-toast' isOpen={open}>
                        <ToastHeader className='toast-img' toggle={toggle}>
                            <Image className='rounded me-2' src={dynamicImage(`dashboard-8/profile.png`)} alt='profile' body={true} />
                            <strong className='me-auto'>{DunzoTheme}</strong>
                            <small>{"10 min ago"}</small>
                        </ToastHeader>
                        <ToastBody className='toast-dark'>
                            <strong className='txt-success'>{"Well done!"}</strong> {"You successfully read this important message."}
                        </ToastBody>
                    </Toast>
                </CardBody>
            </Card>
        </Col>
    );
}
