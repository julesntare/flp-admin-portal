import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonPrefixAndPostfix from '../Common/CommonPrefixAndPostfix'
import { touchspinSubTitle } from '../../../../../Data/Forms/FormWidgetsData'
import { IconsWithPrefixAndPostfixTitle } from '../../../../../Utils/Constants'

export default function IconsWithPrefixAndPostfix() {
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={IconsWithPrefixAndPostfixTitle} subTitle={touchspinSubTitle} />
                <CardBody className="common-flex pre-post-touchspin">
                    <CommonPrefixAndPostfix preIcon />
                    <CommonPrefixAndPostfix postIcon />
                </CardBody>
            </Card>
        </Col>
    )
}
