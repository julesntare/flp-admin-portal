import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { H6 } from '../../../../../AbstractElements'
import { VariationCheckboxTitle } from '../../../../../Utils/Constants'
import { variationCheckBoxSubTitle } from '../../../../../Data/Forms/FormControlsData'
import VariationActivities from './VariationActivities'
import VariationCheckboxUpgrade from './VariationCheckboxUpgrade'

export default function VariationCheckbox() {
    
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={VariationCheckboxTitle} subTitle={variationCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <VariationActivities/>
                        <VariationCheckboxUpgrade/>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
