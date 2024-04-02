import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import { Image, P } from '../../../../AbstractElements'
import { DunzoTheme } from '../../../../Utils/Constants'
import { ToastPlacementContentProp } from '../../../../Types/BonusUiType'
import { dynamicImage } from '../../../../Utils'


export default function ToastPlacementContent({ selectedPosition }:ToastPlacementContentProp) {
    return (
        <div className='position-relative bd-example-toasts'>
            <div className={`toast-container p-3 position-absolute ${selectedPosition}`} id='toastPlacement'>
                <Toast>
                    <ToastHeader className='toast-img'>
                        <Image className='rounded me-2' src={dynamicImage(`dashboard-8/profile.png`)} alt='profile' body={true} />
                        <strong className='me-auto'>{DunzoTheme}</strong>
                        <small>{"25 min ago"}</small>
                    </ToastHeader>
                    <ToastBody className='toast-dark txt-dark'>
                        <P className='toast-content'>
                            <em className="txt-danger">{'Attackers'}</em>{' on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.'}
                        </P>
                    </ToastBody>
                </Toast>
            </div>
        </div>
    )
}
