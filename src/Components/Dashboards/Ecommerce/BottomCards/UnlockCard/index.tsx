import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Unlock } from '../../../../../Utils/Constants'
import { Btn, P } from '../../../../../AbstractElements'

export default function UnlockCard() {
    return (
        <Row>
            <Col xl={12} className="pe-0">
                <Card className="unlock">
                    <CardBody>
                        <div className="d-flex">
                            <P>{"Unlock Machine Learning insights below. try our premium service for 1 month free!"}</P>
                            <Btn color='primary'>{Unlock}</Btn>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
