import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonCardFooter from '../../Common/CommonCardFooter'
import { SolidBorderStyleTitle } from '../../../../../Utils/Constants'
import { solidBordersStyleSubTitle } from '../../../../../Data/Forms/FormControlsData'
import SolidBorderStyleForm from './SolidBorderStyleForm'

export default function SolidBorderStyle() {
    
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='pb-0' title={SolidBorderStyleTitle} subTitle={solidBordersStyleSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <SolidBorderStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
            </Card>
        </Col>
    )
}
