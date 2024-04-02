import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { InlineInputTypesTitle } from '../../../../../Utils/Constants'
import { inlineInputTypesSubTitle } from '../../../../../Data/Forms/FormControlsData'
import InlineCheckboxRadio from './InlineCheckboxRadio'
import InlineSwitches from './InlineSwitches'

export default function InlineInputTypes() {
    
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={InlineInputTypesTitle} subTitle={inlineInputTypesSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <InlineCheckboxRadio />
                        <InlineSwitches />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
