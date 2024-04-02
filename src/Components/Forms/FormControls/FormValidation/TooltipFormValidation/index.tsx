import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { TooltipFormValidationTitle } from '../../../../../Utils/Constants'
import { tooltipFormValidationSubTitle } from '../../../../../Data/Forms/FormControlsData'
import TooltipFormValidationForm from './TooltipFormValidationForm'

export default function TooltipFormValidation() {
    
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={TooltipFormValidationTitle} subTitle={tooltipFormValidationSubTitle} />
                <CardBody>
                    <TooltipFormValidationForm />
                </CardBody>
            </Card>
        </Col>
    )
}
