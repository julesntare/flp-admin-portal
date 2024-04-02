import React from 'react'
import { Col, Row } from 'reactstrap'
import CountUp from 'react-countup';
import { H3, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function InvoiceSixHeader() {
    return (
        <div>
            <Row>
                <Col sm={6}>
                    <div className="d-flex">
                        <div className="media-left">
                            <Image className='media-object img-80 img-fluid for-light' src={dynamicImage(`logo/logo.png`)} alt="logo" />
                            <Image className='media-object img-80 img-fluid for-dark' src={dynamicImage(`logo/logo.png`)} alt="logo" />
                        </div>
                        <div className="flex-grow-1 m-l-20 text-right">
                            <H3 className="media-heading">{'Dunzo'} </H3>
                            <P>{'hello@Dunzo.in'}<br /><span>{'289-335-6503'}</span></P>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="text-md-end text-xs-center">
                        <H3>
                            {'Invoice'}<CountUp end={1069} prefix='#' className='counter' />
                        </H3>
                        <P>{'Issued: May'}<span> {'27, 2023'}</span><br /> {'Payment Due: June'} <span>{'27, 2023'}</span></P>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
