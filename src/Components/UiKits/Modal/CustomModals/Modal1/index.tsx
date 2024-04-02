import { useState } from 'react'
import { Col } from 'reactstrap'
import DotText from '../Common/DotText'
import Modal1Body from './Modal1Body'
import { Btn, H4, Image, P } from '../../../../../AbstractElements'
import { ClickOut, Modal1Text, ProfileModal, TextModal } from '../../../../../Utils/Constants'
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal'
import { dynamicImage } from '../../../../../Utils'

function Modal1 () {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal) }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
        bodyClass: 'p-0'
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='Dunzo-demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <H4 className="f-w-600 theme-name mb-0">
                            <span>{Modal1Text}</span>{ProfileModal}
                        </H4>
                        <P>{TextModal}</P>
                    </div>
                    <div className="overflow-hidden">
                        <Image className="img-fluid" src={dynamicImage(`alert/social.png`)} alt="social" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Btn>
                    </div>
                    <CommonModal modalData={data}>
                        <Modal1Body />
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}
export default Modal1;