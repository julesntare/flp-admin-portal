import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { RoundedTouchspinTitle } from '../../../../../Utils/Constants'
import { defaultTouchspinData, touchspinSubTitle } from '../../../../../Data/Forms/FormWidgetsData'
import CommonTouchspin from '../Common/CommonTouchspin'

export default function RoundedTouchspin() {
    
    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RoundedTouchspinTitle} subTitle={touchspinSubTitle} />
                <CardBody className="common-flex rounded-touchspin">
                    {defaultTouchspinData.map((data) => (
                        <CommonTouchspin key={data.id} arrowIcon={true} color={data.color} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
