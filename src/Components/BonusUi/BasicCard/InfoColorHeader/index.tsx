import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { H3, P } from '../../../../AbstractElements'
import { DunzoTheme, InfoColorHeaderTitle, WebDesignerText } from '../../../../Utils/Constants'

export default function InfoColorHeader() {
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='bg-info' title={InfoColorHeaderTitle} titleClass='text-white'/>
                <CardBody>
                    <H3 className='pb-2'> {WebDesignerText} </H3>
                    <P className='mb-0'>
                        {"By following instructions and adding your own unique twist and style, you may apply your imagination as a web designer. The majority of the tasks you'll be assigned will have a specific due date and work description, but the reason you were employed was because they need a specialist to inject some much-needed creativity."}
                    </P>
                </CardBody>
                <CardFooter>
                    <H3 className='mb-0 text-end'>{DunzoTheme}</H3>
                </CardFooter>
            </Card>
        </Col>
    )
}
