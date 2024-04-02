import React, { Fragment, useState } from 'react'
import { Btn, Image } from '../../../../../AbstractElements';
import { DunzoTheme, LiveToastBodyText, TopRightToastTitle } from '../../../../../Utils/Constants';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { dynamicImage } from '../../../../../Utils';

export default function TopRightToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible)
    const handleClick = () => {
       setVisible(true);
       setTimeout(() => setVisible(false), 8000);
     };
    return (
      <Fragment>
        <Btn color='primary' id='liveToast' onClick={handleClick}>
          {TopRightToastTitle}
        </Btn>
        <div className='toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl'>
          <Toast  fade id='liveToast' isOpen={visible} className='toast-trans'>
            <ToastHeader className='toast-img' toggle={toggle}>
              <Image className='rounded me-2' src={dynamicImage(`dashboard-8/profile.png`)} alt='profile' body={true} />
              <strong className='me-auto'>{DunzoTheme}</strong>
              <small>{"5 min ago"}</small>
            </ToastHeader>
            <ToastBody className='toast-dark'>{LiveToastBodyText}</ToastBody>
          </Toast>
        </div>
      </Fragment>
    );
 }