import React from 'react'
import { TagModalProps } from '../../../../../Types/BookmarkType'
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { Cancel, CreateTag, Save, TagColor, TagName } from '../../../../../Utils/Constants'

export default function TagModal({ showModal, modalToggle }: TagModalProps) {
    return (
        <Modal className="modal-bookmark" size="lg" isOpen={showModal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>{CreateTag}</ModalHeader>
            <ModalBody>
                <Form className="form-bookmark needs-validation" noValidate>
                    <Row className="g-2">
                        <Col md={12}>
                            <FormGroup className="mt-0">
                                <Label>{TagName}</Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup className="mt-0">
                                <Label>{TagColor}</Label>
                                <Input className="form-color d-block" type="color" defaultValue='#307EF3' required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Btn color='secondary' className='me-2' onClick={modalToggle}>{Save}</Btn>
                    <Btn color='primary' onClick={modalToggle}>{Cancel}</Btn>
                </Form>
            </ModalBody>
        </Modal>
    )
}
