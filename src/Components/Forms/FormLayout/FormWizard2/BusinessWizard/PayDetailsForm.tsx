import React, { ChangeEvent, useState } from 'react'
import { ActiveCallbackProp } from '../../../../../Types/FormType'
import { toast } from 'react-toastify';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { AgreeTerms, CVVNumber, CardHolder, CardNumber, Continue, Expiration, Previous } from '../../../../../Utils/Constants';
import { listOfYears } from '../../../../../Data/Forms/FormLayoutData';

export default function PayDetailsForm({ activeCallBack }: ActiveCallbackProp) {
    const [formData, setFormData] = useState({ cardHolderName: "", cardNumber: "", expiryDate: "", expiryYear: "", cvvNumber: "", });
    const { cardHolderName, cardNumber, expiryDate, expiryYear, cvvNumber } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (cardHolderName !== "" && cardNumber !== "" && expiryDate !== "" && expiryYear !== "" && cvvNumber !== "") {
            activeCallBack(5);;
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    return (
        <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Row className='g-3'>
                <Col md={6}>
                    <Label>{CardHolder}</Label>
                    <Input value={cardHolderName} name="cardHolderName" onChange={updateFormData} type="text" />
                </Col>
                <Col md={6}>
                    <Label>{CardNumber}</Label>
                    <Input value={cardNumber} name="cardNumber" onChange={updateFormData} type="text" placeholder="xxxx xxxx xxxx xxxx" />
                </Col>
                <Col xs={12}>
                    <Row className="g-3">
                        <Col md={6}>
                            <Label>{Expiration}</Label>
                            <Row className="g-3">
                                <Col md={6}>
                                    <Input id="expiration" type="number" required placeholder="xx/xx" value={expiryDate} name="expiryDate" onChange={updateFormData} />
                                </Col>
                                <Col md={6}>
                                    <Input value={expiryYear} name="expiryYear" type="select" onChange={updateFormData} className="f-w-400 f-14 text-gray">
                                        <option value={""}>{'Year'}</option>
                                        {listOfYears.map((data, index) => (<option key={index} value={data}>{data}</option>))}
                                    </Input>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Label>{CVVNumber}</Label>
                            <Input type="text" required value={cvvNumber} name="cvvNumber" onChange={updateFormData} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <FormGroup check className="mb-0">
                        <Input id="invalidCheckboxWizard" type="checkbox" />
                        <Label className="mb-0" htmlFor="invalidCheckboxWizard" check>{AgreeTerms}</Label>
                    </FormGroup>
                </Col>
                <Col xs={12} className="text-end">
                    <Btn color="primary me-2" onClick={() => activeCallBack(3)}>{Previous}</Btn>
                    <Btn color="primary" onClick={handleNextButton}>{Continue}</Btn>
                </Col>
            </Row>
        </Form>
    )
}
