import React from 'react'
import { Col, Form, Row } from 'reactstrap'
import { H6, Image, P } from '../../../../../AbstractElements'
import { Congratulations } from '../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../Utils'

export default function FinishForm() {
    return (
        <Form className="stepper-four needs-validation" noValidate>
            <Row className='g-3'>
                <Col xs={12} className="m-0">
                    <div className="successful-form">
                        <Image className="img-fluid" src={dynamicImage(`gif/dashboard-8/successful.gif`)} alt="successful" />
                        <H6>{Congratulations}</H6>
                        <P>{"Well done! You have successfully completed. "}</P>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}
