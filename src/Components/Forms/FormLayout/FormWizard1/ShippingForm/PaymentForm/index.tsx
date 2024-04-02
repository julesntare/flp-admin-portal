import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '../../../../../../Types/FormType';
import { Btn, H3, P } from '../../../../../../AbstractElements';
import { Col, Row } from 'reactstrap';
import { PaymentInformation, ProceedToNext } from '../../../../../../Utils/Constants';
import PayPalOption from './PayPalOption';
import CreditCardOption from './CreditCardOption';
import CashOnDelivery from './CashOnDelivery';

export default function PaymentForm({ activeCallBack }: ActiveCallbackProp) {
    const [payMethod, setPayMethod] = useState("");
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setPayMethod(value);
    };
    const handleNextButton = () => {
        if (payMethod !== "") {
            activeCallBack(4);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };

    return (
        <>
            <H3>{PaymentInformation}</H3>
            <P className="f-light">{"Fill up the following information to send you the order"}</P>
            <div className="payment-info-wrapper">
                <Row className="shipping-method g-3">
                    <PayPalOption payMethod={payMethod} updateFormData={updateFormData} />
                    <CreditCardOption payMethod={payMethod} updateFormData={updateFormData} />
                    <CashOnDelivery payMethod={payMethod} updateFormData={updateFormData} />
                    <Col xs={12} className="text-end">
                        <Btn color="primary" onClick={handleNextButton}>
                            {ProceedToNext}
                            <i className="fa fa-truck proceed-next pe-2" />
                        </Btn>
                    </Col>
                </Row>
            </div>
        </>
    );
};

