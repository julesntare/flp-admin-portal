import React from 'react'
import { Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import { EmailVerificationTitle, Verify } from '../../../../../Utils/Constants'
import { H4, P } from '../../../../../AbstractElements'

export default function EmailVerificationContent() {
    return (
        <Col xxl={8} className="box-col-7">
            <H4>{EmailVerificationTitle}</H4>
            <P>{" A verification code has been sent to your email. This code will be valid for 15 minutes."}</P>
            <InputGroup className="mb-3">
                <Input type="text" placeholder="Please enter the code here" />
                <InputGroupText className="bg-primary">{Verify}</InputGroupText>
            </InputGroup>
        </Col>
    )
}
