import React from 'react'
import { HorizontalStyleTitle } from '../../../../../Utils/Constants'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonCardFooter from '../../Common/CommonCardFooter'
import { horizontalStyleSubTitle } from '../../../../../Data/Forms/FormControlsData'
import HorizontalStyleForm from './HorizontalStyleForm'

export default function HorizontalStyle() {
    
    return (
        <Col sm={12} xxl={6} className="box-col-12">
            <Card className="height-equal">
            <CommonCardHeader headClass='pb-0' title={HorizontalStyleTitle} subTitle={horizontalStyleSubTitle} />
                <CardBody>
                    <HorizontalStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
            </Card>
        </Col>
    )
}
