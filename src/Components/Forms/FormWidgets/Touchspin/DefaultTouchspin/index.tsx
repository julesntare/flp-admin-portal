import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonTouchspin from '../Common/CommonTouchspin'
import { defaultTouchspinData, touchspinSubTitle } from '../../../../../Data/Forms/FormWidgetsData'
import { DefaultTouchspinTitle } from '../../../../../Utils/Constants'

export default function DefaultTouchspin() {
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultTouchspinTitle} subTitle={touchspinSubTitle} />
                <CardBody className='common-flex'>
                    {defaultTouchspinData.map((data) => (
                        <CommonTouchspin key={data.id} color={data.color} />
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
