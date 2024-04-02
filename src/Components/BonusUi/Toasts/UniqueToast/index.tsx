import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DunzoTheme, UniqueToastTitle } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import UniqueToastContent from '../Common/UniqueToastContent';
import { colorsSchemeSubTitle } from '../../../../Data/BonusUiData/ToastsData';
import { dynamicImage } from '../../../../Utils';

export default function UniqueToast() {
    const [visible, setVisible] = useState(true);
    const toggle = () => setVisible(!visible);
    return (
        <Col md={6}>
            <Card className='height-equal'>
                <CommonCardHeader title={UniqueToastTitle} subTitle={colorsSchemeSubTitle} />
                <CardBody className='toast-rtl'>
                    <Toast isOpen={visible}>
                        <ToastHeader className='toast-img' toggle={toggle}>
                            <Image className='rounded me-2' src={dynamicImage(`dashboard-8/profile.png`)} alt='profile' body={true} />
                            <strong className='me-auto'>{DunzoTheme}</strong>
                        </ToastHeader>
                        <UniqueToastContent visible={visible} setVisible={setVisible} />
                    </Toast>
                </CardBody>
            </Card>
        </Col>
    );
}
