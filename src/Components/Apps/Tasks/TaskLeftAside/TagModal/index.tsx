import React from 'react'
import { TagModalProps } from '../../../../../Types/TasksType'
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { Cancel, CreateTag, Save, TagColor, TagName } from '../../../../../Utils/Constants'

export default function TagModal({ tagModal, tagToggle }: TagModalProps) {
    return (
        <Modal className="modal-bookmark" size="lg" isOpen={tagModal} toggle={tagToggle}>
            <ModalHeader toggle={tagToggle}>{CreateTag}</ModalHeader>
            <ModalBody>
                <Form className="form-bookmark needs-validation" noValidate>
                    <Row>
                        <Col md={12}>
                            <FormGroup className="mt-0">
                                <Label>{TagName}</Label>
                                <Input type="text" required />
                            </FormGroup>
                        </Col>
                        <Col md={12} className="mt-0">
                            <Label>{TagColor}</Label>
                            <Input className="form-color d-block" type="color" defaultValue='#307EF3' />
                        </Col>
                    </Row>
                    <Btn color='secondary' className='me-2' onClick={tagToggle}>{Save}</Btn>
                    <Btn color='primary' onClick={tagToggle}>{Cancel}</Btn>
                </Form>
            </ModalBody>
        </Modal>
    )
}
