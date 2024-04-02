import React, { useState } from 'react'
import { Btn } from '../../../../../../AbstractElements';
import { AddCategory, Cancel, Save } from '../../../../../../Utils/Constants';
import { Col, Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

export default function CategoryModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Btn color='transparent' className="btn-category" onClick={toggle}><span className="title">{'+ '}{AddCategory}</span></Btn>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{AddCategory}</ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark">
                        <Row className="g-2">
                            <Col md={12}>
                                <FormGroup>
                                    <Input type="text" required placeholder="Enter category name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Btn color='secondary' className='me-2' onClick={toggle}>{Save}</Btn>
                        <Btn color='primary' onClick={toggle}>{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}
