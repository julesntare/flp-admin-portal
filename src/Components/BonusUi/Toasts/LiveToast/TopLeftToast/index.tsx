import React, { Fragment, useState } from 'react'
import { Btn, Image } from '../../../../../AbstractElements';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { DunzoTheme, TopLeftToastTitle } from '../../../../../Utils/Constants';
import { dynamicImage } from '../../../../../Utils';

export default function TopLeftToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible)
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <Fragment>
            <Btn color='warning' id='liveToastBtn2' onClick={handleClick}>
                {TopLeftToastTitle}
            </Btn>
            <div className='toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl'>
                <Toast fade id='liveToastBtn2' isOpen={visible} className='toast-trans'>
                    <ToastHeader className='toast-img' toggle={toggle}>
                        <Image className='rounded me-2' src={dynamicImage(`dashboard-8/profile.png`)} alt='profile' body={true} />
                        <strong className='me-auto'>{DunzoTheme}</strong>
                        <small>{"10 min ago"}</small>
                    </ToastHeader>
                    <ToastBody className='toast-dark'>
                        <strong className='txt-success'>{"Well done!"}</strong> {"You successfully read this important message."}
                    </ToastBody>
                </Toast>
            </div>
        </Fragment>
    );
}