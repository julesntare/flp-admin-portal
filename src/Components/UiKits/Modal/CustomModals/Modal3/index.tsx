import { useState } from 'react'
import { Col } from 'reactstrap'
import DotText from '../Common/DotText'
import { Btn, H4, Image, P } from '../../../../../AbstractElements';
import { BalanceModal, BalanceText, ClickOut, Modal3Text } from '../../../../../Utils/Constants';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import Modal3Body from './Modal3Body/index.tsx';
import { dynamicImage } from '../../../../../Utils';

function Modal3 () {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal) }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
        bodyClass: 'p-0 '
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='Dunzo-demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <H4 className="f-w-600 theme-name mb-0"><span>{Modal3Text}</span>{BalanceModal}</H4>
                        <P>{BalanceText}</P>
                    </div>
                    <div className="overflow-hidden balance-modal">
                        <Image className="img-fluid" src={dynamicImage(`alert/balance.png`)} alt="balance" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle} >{ClickOut}</Btn>
                    </div>
                    <CommonModal modalData={data}>
                        <Modal3Body />
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}

export default Modal3