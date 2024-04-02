import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CheckMeOut, EmailAddress, FloatingFormTitle, Password, SignIn } from '../../../../../Utils/Constants'
import { Btn } from '../../../../../AbstractElements'
import { floatingFormSubTitle } from '../../../../../Data/Forms/FormControlsData'

export default function FloatingForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={FloatingFormTitle} subTitle={floatingFormSubTitle} />
                <CardBody>
                    <div className="card-wrapper border rounded-3">
                        <Form onSubmit={handleSubmit} className="floating-wrapper">
                            <Row className='g-3'>
                                <Col xs={12}>
                                    <FormGroup floating>
                                        <Input type="email" placeholder="name@example.com" />
                                        <Label>{EmailAddress}</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs={12}>
                                    <FormGroup floating>
                                        <Input type="password" placeholder="Password" />
                                        <Label>{Password}</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs={12}>
                                    <FormGroup check className="checkbox-checked">
                                        <Label check>
                                            <Input type="checkbox" />
                                            {CheckMeOut}</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs={12}>
                                    <Btn color="primary" type="submit">
                                        {SignIn}
                                    </Btn>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
