import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonTouchspin from '../Common/CommonTouchspin'
import { OutlinedTouchspinTitle } from '../../../../../Utils/Constants'
import { defaultTouchspinData, touchspinSubTitle } from '../../../../../Data/Forms/FormWidgetsData'

export default function OutlinedTouchspin() {
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={OutlinedTouchspinTitle} subTitle={touchspinSubTitle} />
                <CardBody className='common-flex'>
                    {defaultTouchspinData.map((data) => (
                        <CommonTouchspin key={data.id} color={data.color} outline={true} btnClass={`spin-border-${data.color}`}/>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
