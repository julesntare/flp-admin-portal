import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormControlTitle, InputMaskTitle } from '../../../../Utils/Constants'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { inputMasksSubTitle } from '../../../../Data/Forms/FormControlsData'
import DateFormat from './DateFormat'
import TimeFormat from './TimeFormat'
import DefaultInputMask from './DefaultInputMask'

export default function InputMaskContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={InputMaskTitle} parent={FormControlTitle} title={InputMaskTitle} />
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={InputMaskTitle} subTitle={inputMasksSubTitle} />
                            <CardBody>
                                <Row className='g-3'>
                                    <DateFormat />
                                    <TimeFormat />
                                    <DefaultInputMask />
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
