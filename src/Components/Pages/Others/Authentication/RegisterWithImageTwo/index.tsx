import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import RegisterForm from '../Common/RegisterForm'
import { dynamicImage } from '../../../../../Utils'

export default function RegisterWithImageTwo() {
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
                <Col xl={7} className="p-0">
                    <Image src={dynamicImage(`login/1.jpg`)} alt='looginpage' className='bg-img-cover bg-center' />
                </Col>
                <Col xl={5} className="p-0">
                    <div className="login-card login-dark">
                        <RegisterForm logoClass='text-start' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
