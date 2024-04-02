import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { H3, P } from '../../../../AbstractElements'
import { DunzoTheme, InfoColorBodyTitle, UXDesigner } from '../../../../Utils/Constants'

export default function InfoColorBody() {
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader title={InfoColorBodyTitle}/>
                <CardBody className='bg-info'>
                    <H3 className='pb-2'> {UXDesigner} </H3>
                    <P className='mb-0'>{'It is the responsibility of the UX designer to make a product or service useful, pleasurable, and accessible. The word "user experience" is used by various industries, although it is most frequently related to digital design for websites and mobile applications.There is no need for coding in user experience design.'}</P>
                </CardBody>
                <CardFooter>
                    <H3 className='mb-0 text-end'>{DunzoTheme}</H3>
                </CardFooter>
            </Card>
        </Col>
    )
}
