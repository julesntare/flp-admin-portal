import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CardFooterSection from '../Common/CardFooterSection'
import { BasicFloatingInputControlTitle } from '../../../../../Utils/Constants'
import { basicFloatingInputControlSubTitle } from '../../../../../Data/Forms/FormControlsData'
import BasicFloatingInputBody from './BasicFloatingInputBody'

export default function BasicFloatingInputControl() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader title={BasicFloatingInputControlTitle} subTitle={basicFloatingInputControlSubTitle} />
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <CardBody className="custom-input">
                        <Row>
                            <BasicFloatingInputBody />
                        </Row>
                    </CardBody>
                    <CardFooterSection />
                </Form>
            </Card>
        </Col>
    )
}
