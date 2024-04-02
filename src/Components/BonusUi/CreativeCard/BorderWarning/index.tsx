import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { borderPrimarySubTitle } from '../../../../Data/BonusUiData/BasicCardData'
import { BorderWarningText, BorderWarningText1, BorderWarningText2, BorderWarningText3, BorderWarningTitle } from '../../../../Utils/Constants'
import { LI, OL } from '../../../../AbstractElements'

export default function BorderWarning() {
    return (
        <Col md={4} xxl={4}>
            <Card className='height-equal'>
                <CommonCardHeader title={BorderWarningTitle} subTitle={borderPrimarySubTitle} headClass='pb-0 border-l-warning border-3' />
                <CardBody>
                    <OL className="list-group list-group-numbered">
                        <LI className="txt-primary fw-bold">{BorderWarningText}</LI>
                        <LI className="txt-danger fw-bold">{BorderWarningText1}</LI>
                        <LI className="txt-success fw-bold">{BorderWarningText2}</LI>
                        <LI className="txt-warning fw-bold">{BorderWarningText3}</LI>
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}
