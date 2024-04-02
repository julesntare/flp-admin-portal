import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { borderLeftSubTitle } from '../../../../Data/BonusUiData/BasicCardData'
import { BorderLeftTitle } from '../../../../Utils/Constants'
import { P } from '../../../../AbstractElements'

export default function BorderLeft() {
    return (
        <Col md={6} xs={12}>
            <Card>
                <CommonCardHeader title={BorderLeftTitle} subTitle={borderLeftSubTitle} headClass='border-l-primary pb-0' />
                <CardBody>
                    <P>
                        {"Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."}<br />
                        <strong>{'Visit Us: '}</strong>{' 2600 Hollywood Blvd,Florida, United States-	33020'}<br />
                        <strong>{'Mail Us: '}</strong>{'contact@us@gmail.com'}<br />
                        <strong>{'Contact Number: '}</strong>{'(954) 357-7760'}
                    </P>
                </CardBody>
            </Card>
        </Col>
    )
}
