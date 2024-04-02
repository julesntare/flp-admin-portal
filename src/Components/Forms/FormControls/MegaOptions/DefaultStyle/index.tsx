import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonCardFooter from '../../Common/CommonCardFooter'
import { DefaultStyleTitle } from '../../../../../Utils/Constants'
import { defaultStyleSubTitle } from '../../../../../Data/Forms/FormControlsData'
import DefaultStyleForm from './DefaultStyleForm'

export default function DefaultStyle() {
    
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultStyleTitle} subTitle={defaultStyleSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <DefaultStyleForm />
                </CardBody>
                <CommonCardFooter footerClass='text-end' color1='primary' color2='light' />
            </Card>
        </Col>
    )
}
