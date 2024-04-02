import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { H3, P } from '../../../../AbstractElements'
import { DunzoTheme, InfoColorFooterTitle, WebDeveloper } from '../../../../Utils/Constants'

export default function InfoColorFooter() {
    return (
        <Col xl={4} xs={12}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={InfoColorFooterTitle} />
                <CardBody>
                    <H3 className='pb-2'> {WebDeveloper} </H3>
                    <P className="mb-0">{'A programmer who uses the client-server architecture to create World Wide Web applications is known as a web developer. The apps generally employ any general-purpose programming language on the server and HTML, CSS, and JavaScript on the client.'}</P>
                </CardBody>
                <CardFooter className='bg-info'>
                    <H3 className='mb-0 text-end'>{DunzoTheme}</H3>
                </CardFooter>
            </Card>
        </Col>
    )
}
