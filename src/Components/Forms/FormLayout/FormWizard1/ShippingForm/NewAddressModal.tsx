import React from 'react'
import { NewAddressModalPropsTypes } from '../../../../../Types/FormType'
import { Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { Address, AddressType, Close, ContactNumber, Home, Information, Name, Office, Save } from '../../../../../Utils/Constants'

export default function NewAddressModal({ toggle, showModal }: NewAddressModalPropsTypes) {
    return (
        <Modal isOpen={showModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{Information}</ModalHeader>
            <ModalBody>
                <Form className="needs-validation" noValidate>
                    <Row className='g-3'>
                        <Col xs={12}>
                            <Label>{Name}</Label>
                            <Input type="text" placeholder="Enter your name" required />
                        </Col>
                        <Col xs={12}>
                            <Label>{Address}</Label>
                            <Input type="textarea" rows={3} placeholder="Enter your address..." />
                        </Col>
                        <Col xs={12}>
                            <Label className="w-100">
                                {AddressType}
                                <Input type="select" required>
                                    <option selected>{Home}</option>
                                    <option>{Office}</option>
                                </Input>
                            </Label>
                        </Col>
                        <Col xs={12}>
                            <Label>{ContactNumber}</Label>
                            <Input type="number" placeholder={"123456789"} />
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Btn color="transparent" onClick={toggle} className="m-0">{Close}</Btn>
                <Btn color="primary" onClick={toggle} className="m-0">{Save}</Btn>
            </ModalFooter>
        </Modal>
    )
}
