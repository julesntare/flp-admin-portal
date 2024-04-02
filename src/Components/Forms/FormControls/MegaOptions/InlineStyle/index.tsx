import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonCardFooter from '../../Common/CommonCardFooter'
import { InlineStyleTitle } from '../../../../../Utils/Constants'
import { inlineStyleSubTitle } from '../../../../../Data/Forms/FormControlsData'
import InlineStyleForm from './InlineStyleForm'

export default function InlineStyle() {
    
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={InlineStyleTitle} subTitle={inlineStyleSubTitle} />
                <CardBody className="megaoptions-border-space-sm">
                    <InlineStyleForm />
                </CardBody>
                <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class='list-light-warning' />
            </Card>
        </Col>
    )
}
