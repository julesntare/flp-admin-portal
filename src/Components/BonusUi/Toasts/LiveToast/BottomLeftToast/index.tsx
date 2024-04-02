import React, { Fragment, useState } from 'react'
import { Btn, Image } from '../../../../../AbstractElements';
import { Toast, ToastHeader } from 'reactstrap';
import { BottomLeftToastTitle, DunzoTheme } from '../../../../../Utils/Constants';
import UniqueToastContent from '../../Common/UniqueToastContent';
import { dynamicImage } from '../../../../../Utils';

export default function BottomLeftToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <Fragment>
            <Btn color='success' id='liveToastBtn3' onClick={handleClick}>
                {BottomLeftToastTitle}
            </Btn>
            <div className='toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl'>
                <Toast fade id='liveToastBtn3' isOpen={visible} className='toast-trans'>
                    <ToastHeader className='toast-img' toggle={toggle}>
                        <Image className='rounded me-2' src={dynamicImage(`dashboard-8/profile.png`)} alt='profile' body={true} />
                        <strong className='me-auto'>{DunzoTheme}</strong>
                    </ToastHeader>
                    <UniqueToastContent visible={visible} setVisible={setVisible} />
                </Toast>
            </div>
        </Fragment>
    );
}
