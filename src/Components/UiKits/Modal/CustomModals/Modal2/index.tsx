import { useState } from 'react'
import { Button, Col } from 'reactstrap'
import DotText from '../Common/DotText'
import Modal2Body from './Modal2Body'
import { Btn, H4, Image, P } from '../../../../../AbstractElements';
import { ClickOut, Modal2text, ResultModal, ResultText } from '../../../../../Utils/Constants';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { dynamicImage } from '../../../../../Utils';

function Modal2 () {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal) }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='Dunzo-demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <H4 className="f-w-600 theme-name mb-0">
                            <span>{Modal2text}</span>{ResultModal}
                        </H4>
                        <P>{ResultText}</P>
                    </div>
                    <div className="overflow-hidden">
                        <Image className="img-fluid" src={dynamicImage(`alert/learning.png`)} alt="learning" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Btn>
                    </div>
                    <CommonModal modalData={data}>
                        <Modal2Body toggle={toggle} />
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}
export default Modal2;