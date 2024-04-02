import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { NestingButtonSpan, NestingTitle } from '../../../../Utils/Constants'
import NestingButton1 from './NestingButton1'
import NestingButtonIcons from './NestingButtonIcons'

export default function NestingButton() {
    
    return (
        <Col lg={6}>
            <Card className='height-equal'>
                <CardHeaderSpan headingClassName='card-no-border pb-0' heading={NestingTitle} span={NestingButtonSpan} />
                <CardBody className='btn-group-wrapper'>
                    <NestingButton1 />
                    <NestingButtonIcons/>
                </CardBody>
            </Card>
        </Col>
    )
}
