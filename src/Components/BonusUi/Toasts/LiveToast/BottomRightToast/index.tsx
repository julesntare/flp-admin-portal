import React, { Fragment, useState } from 'react'
import { Btn } from '../../../../../AbstractElements';
import { CloseButton, Toast, ToastBody } from 'reactstrap';
import { BottomRightToastBodyText, BottomRightToastTitle } from '../../../../../Utils/Constants';

export default function BottomRightToast() {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <Fragment>
            <Btn color='secondary' id='liveToastBtn1' onClick={handleClick}>
                {BottomRightToastTitle}
            </Btn>
            <div className='toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl'>
                <Toast fade id='liveToastBtn1' isOpen={visible} className='toast-trans'>
                    <div className='d-flex justify-content-between alert-secondary'>
                        <ToastBody>{BottomRightToastBodyText}</ToastBody>
                        <CloseButton className='btn-close-white me-2 m-auto' onClick={handleClick}></CloseButton>
                    </div>
                </Toast>
            </div>
        </Fragment>
    );
}
