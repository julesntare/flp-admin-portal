import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Users } from 'react-feather';
import { Btn } from '../../../../../../AbstractElements';
import { AddContactText, NewContacts } from '../../../../../../Utils/Constants';
import AddContactForm from './AddContactForm';

export default function AddContact() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Btn color='primary' className="btn-block btn-mail w-100" onClick={toggle}>
                <Users className="me-2" />{NewContacts}
            </Btn>
            <Modal className="modal-bookmark" isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>{AddContactText}</ModalHeader>
                <ModalBody>
                    <AddContactForm setModal={setModal} toggle={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}
