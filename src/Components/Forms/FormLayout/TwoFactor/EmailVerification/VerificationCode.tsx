import React, { FormEvent, useState } from 'react'
import { Col, Form, Input, Row } from 'reactstrap';
import { Btn, H4, H5, Image } from '../../../../../AbstractElements';
import { Call, Href, OR, Resend, VerificationCodeTitle, Verify, YourCode } from '../../../../../Utils/Constants';
import { dynamicImage } from '../../../../../Utils';
import { otpGenerate } from '../../../../../Data/Forms/FormLayoutData';

export default function VerificationCode() {
    const [val, setVal] = useState(Array(6).fill(undefined));
    const handleChange = (e: string, index: number) => {
        if (e.length > 1) return;
        else {
            const tempt = [...val];
            tempt[index] = parseInt(e);
            setVal(tempt);
        }
    };
    return (
        <Col md={6}>
            <div className="card-wrapper border rounded-3 h-100">
                <div className="authenticate">
                    <H4>{VerificationCodeTitle}</H4>
                    <Image className="img-fluid" src={dynamicImage(`forms/authenticate.png`)} alt="authenticate" />
                    <span>{"We've sent a verification code to"}</span>
                    <span>{'+91********70'}</span>
                    <Form onSubmit={(event) => event.preventDefault()}>
                        <Row>
                            <Col><H5>{YourCode}</H5></Col>
                            <Col className="otp-generate">
                                {otpGenerate.map((data, index) => (<Input key={data} value={val[index]} className="code-input" type="number" onChange={(e) => handleChange(e.target.value, index)}  />))}
                            </Col>
                            <Col>
                                <Btn color="primary" className="w-100">{Verify}</Btn>
                            </Col>
                            <div>
                                <span>{"Not received your code?"}</span>
                                <span>
                                    <a href={Href}>{Resend} </a>{OR}<a href={Href}> {Call}</a>
                                </span>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
        </Col>
    )
}
