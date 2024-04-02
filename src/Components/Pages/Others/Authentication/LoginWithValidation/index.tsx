import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import LoginForm from '../Common/LoginForm'
import { dynamicImage } from '../../../../../Utils'

export default function LoginWithValidation() {
    return (
        <Container fluid>
            <Row>
                <Col xl={7} className='order-1'>
                    <Image src={dynamicImage(`login/1.jpg`)} alt='looginpage' className='bg-img-cover bg-center' />
                </Col>
                <Col xl={5} className="p-0">
                    <div className="login-card login-dark">
                        <LoginForm logoClass='text-start' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
