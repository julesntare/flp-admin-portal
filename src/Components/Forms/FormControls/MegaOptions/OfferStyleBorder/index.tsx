import React from 'react'
import OfferStyleBorderForm from './OfferStyleBorderForm'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonCardFooter from '../../Common/CommonCardFooter'
import { OfferStyleBorderTitle } from '../../../../../Utils/Constants'
import { offerStyleBorderSubTitle } from '../../../../../Data/Forms/FormControlsData'

export default function OfferStyleBorder() {
    
    return (
        <Col sm={12} xxl={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='pb-0' title={OfferStyleBorderTitle} subTitle={offerStyleBorderSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <OfferStyleBorderForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="success" color2="light-success" btn2Class='list-light-success' />
            </Card>
        </Col>
    )
}
