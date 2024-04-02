import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { CheckMeOut, Email, Password, SignIn } from '../../../../Utils/Constants'

type propsType = {
    toggle: () => void
}

function StaticModalForm ({ toggle }: propsType) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={12}>
                    <Label htmlFor="inputEmail4">{Email}</Label>
                    <Input id="inputEmail4" type="email" placeholder="Enter Your Email" />
                </Col>
                <Col md={12}>
                    <Label htmlFor="inputPassword4">{Password}</Label>
                    <Input className="form-control" id="inputPassword4" type="password" placeholder="Enter Your Password" />
                </Col>
                <Col xs={12}>
                    <FormGroup check>
                        <Input id="gridCheck" type="checkbox" />
                        <Label htmlFor="gridCheck" className="d-block mb-0" check>{CheckMeOut}</Label>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Btn color='primary' type="submit" onClick={toggle}>{SignIn}</Btn>
                </Col>
            </Row>
        </Form>
    )
}
export default StaticModalForm;