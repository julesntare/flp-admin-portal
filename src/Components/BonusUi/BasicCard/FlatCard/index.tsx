import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { P } from '../../../../AbstractElements'
import { flatCardSubTitle } from '../../../../Data/BonusUiData/BasicCardData'
import { FlatCardTitle } from '../../../../Utils/Constants'

export default function FlatCard() {
    return (
        <Col sm={12} xl={6}>
            <Card className='b-r-0'>
                <CommonCardHeader headClass='pb-0' title={FlatCardTitle} subTitle={flatCardSubTitle} />
                <CardBody>
                    <P className="mb-0">
                        {'A navigation bar is a particularly important feature because it allows visitors to quickly and easily find '}
                        <em className="txt-danger">{'important pages on your website'}</em>
                        {', like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.'}
                    </P>
                </CardBody>
            </Card>
        </Col>
    )
}
