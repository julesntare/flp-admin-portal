import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H3, Image, P } from '../../../../AbstractElements'
import { IconHeadingCodeText, IconHeadingParagraph, IconHeadingTitle } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function HeadingIcon() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHeader className='pb-0'>
                    <H3> <i className='icofont icofont-library me-2'></i> {IconHeadingTitle} </H3>
                    <P className='f-m-light mt-1'> {IconHeadingParagraph} <code>{IconHeadingCodeText}</code></P>
                </CardHeader>
                <CardBody>
                    <div className='d-flex gap-3 align-items-center list-behavior-1'>
                        <div className='flex-shrink-0'>
                            <Image className='tab-img img-fluid' src={dynamicImage(`blog/img.png`)} alt='home' />
                        </div>
                        <div className='flex-grow-1 ms-0'>
                            <P className='mb-xl-0 mb-sm-4'>
                                {'We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.'}
                            </P>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
