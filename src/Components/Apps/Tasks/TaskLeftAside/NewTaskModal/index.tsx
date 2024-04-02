import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { Btn } from '../../../../../AbstractElements';
import NewTaskForm from './NewTaskForm';
import { AddTaskTitle, NewTaskTitle } from '../../../../../Utils/Constants';

export default function NewTaskModal() {
    const [addModal, setAddModal] = useState(false);
    const toggle = () => setAddModal(!addModal);

    return (
        <>
            <Btn color='primary' className="btn-block btn-mail w-100" onClick={toggle}><CheckCircle className="me-2" />{NewTaskTitle}</Btn>
            <Modal className="modal-bookmark" size="lg" isOpen={addModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{AddTaskTitle}</ModalHeader>
                <ModalBody>
                    <NewTaskForm setAddModal={setAddModal} toggle={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}