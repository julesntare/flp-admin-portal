import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonPrefixAndPostfix from '../Common/CommonPrefixAndPostfix'
import { ButtonsWithPrefixPostfixTitle } from '../../../../../Utils/Constants'
import { touchspinSubTitle } from '../../../../../Data/Forms/FormWidgetsData'

export default function ButtonsWithPrefixPostfix() {
    
    return (
        <Col xl={6}>
            <Card>
            <CommonCardHeader headClass='pb-0' title={ButtonsWithPrefixPostfixTitle} subTitle={touchspinSubTitle} />
                <CardBody className="common-flex pre-post-touchspin">
                    <CommonPrefixAndPostfix preButton color />
                    <CommonPrefixAndPostfix PostButton color />
                </CardBody>
            </Card>
        </Col>
    )
}
