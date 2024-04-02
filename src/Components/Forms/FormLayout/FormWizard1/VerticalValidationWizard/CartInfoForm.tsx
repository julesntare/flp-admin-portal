import React from 'react'
import { VerticalWizardFormProps } from '../../../../../Types/FormType'
import { Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { Btn, H3 } from '../../../../../AbstractElements'
import { AboveInformationCorrect, CVVNumber, CardNumber, Expiration, SelectPaymentMethod, Submit, UploadDocumentation } from '../../../../../Utils/Constants'
import { paymentModeName } from '../../../../../Data/Forms/FormLayoutData'

export default function CartInfoForm({ formData, updateFormData }: VerticalWizardFormProps) {
    return (
        <Form className="needs-validation custom-input" noValidate>
            <Row className='g-3'>
                <Col xxl={6}>
                    <div className="card-wrapper border rounded-3 checkbox-checked">
                        <H3 className="sub-title">{SelectPaymentMethod}</H3>
                        <div className="radio-form">
                            {paymentModeName.map((data, index) => (
                                <FormGroup check key={index}>
                                    <Input id={`flexRadioDefault${index}`} type="radio" name="paymentMethod" value="visa" />
                                    <Label htmlFor={`flexRadioDefault${index}`} check>{data}</Label>
                                </FormGroup>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={6}>
                    <Row>
                        <Col xs={12}>
                            <InputGroup className="mb-3">
                                <Input type="text" placeholder="Recipient's username" name="recipientUserName" value={formData.recipientUserName} onChange={updateFormData} />
                                <Btn outline color="secondary" >{Submit}</Btn>
                            </InputGroup>
                        </Col>
                        <Col xs={12}>
                            <InputGroup>
                                <InputGroupText>{'@'}</InputGroupText>
                                <Input type="text" placeholder="Username" name="userName" value={formData.userName} onChange={updateFormData} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} sm={6}>
                    <Label>{CardNumber}</Label>
                    <Input type="text" placeholder="xxxx xxxx xxxx xxxx" name="cardNumber" value={formData.cardNumber} onChange={updateFormData} />
                </Col>
                <Col md={4} sm={6}>
                    <Label htmlFor="validationDates">{Expiration}</Label>
                    <Input id="validationDates" type="number" placeholder="xx/xx" name="expirationDate" value={formData.expirationDate} onChange={updateFormData} />
                </Col>
                <Col md={4} sm={6}>
                    <Label htmlFor="cvvNumber-b">{CVVNumber}</Label>
                    <Input id="cvvNumber-b" type="text" name="cvvNumber" value={formData.cvvNumber} onChange={updateFormData} />
                </Col>
                <Col md={12} sm={6}>
                    <Label htmlFor="formFile2">{UploadDocumentation}</Label>
                    <Input id="formFile2" type="file" name="documentationName" onChange={updateFormData} />
                </Col>
                <Col xs={12}>
                    <FormGroup check className="mb-0">
                        <Input id="invalidCheck-b" type="checkbox" required />
                        <Label htmlFor="invalidCheck-b" check>{AboveInformationCorrect}</Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}
