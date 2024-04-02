import React, { useRef } from 'react'
import { Media, Modal, ModalBody, ModalHeader } from 'reactstrap'
import ReactToPrint from "react-to-print";
import { PrintModalProps } from '../../../../../../Types/ContactType'
import { Btn, H3, H6, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import { Cancel, EmailAddress, General, Print, PrintPreview } from '../../../../../../Utils/Constants'

export default function PrintModal({ printModal, selectedUser, toggleCallback }: PrintModalProps) {
    const componentRef = useRef<HTMLDivElement>(null);
    const printModalToggle = () => {
        toggleCallback(false);
    };
    return (
        <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
            <ModalHeader toggle={printModalToggle}>{PrintPreview}</ModalHeader>
            <ModalBody className="list-persons">
                <div className="profile-mail pt-0" ref={componentRef}>
                    <Media>
                        <Image className="img-100 img-fluid m-r-20 rounded-circle" src={dynamicImage(`user/user-dp.png`)} alt="" />
                        <Media body className="mt-0">
                            <H3>
                                <span>{selectedUser.name}</span>
                                <span>{selectedUser.surname}</span>
                            </H3>
                            <P>{selectedUser.name}{'@gmail.com'}</P>
                        </Media>
                    </Media>
                    <div className="email-general">
                        <H6>{General}</H6>
                        <P>{EmailAddress} :<span className="font-primary" id="mailadd">{selectedUser.surname}{'@gmail.com'}</span></P>
                    </div>
                </div>
                <ReactToPrint
                    trigger={() => (
                        <Btn color='secondary' className='me-1'>{Print}</Btn>
                    )}
                    content={() => componentRef.current}
                />
                <Btn color='primary' onClick={printModalToggle}>{Cancel}</Btn>
            </ModalBody>
        </Modal>
    )
}
