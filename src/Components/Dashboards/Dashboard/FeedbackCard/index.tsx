import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { Feedback } from '../../../../Utils/Constants'
import { H2, Image, LI, ProgressBar, UL } from '../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../Utils'

export default function FeedbackCard() {
    return (
        <Col xl={2} sm={6} className="col-xl-40 box-col-5 pedding-start pedding-sm">
            <Card className="mb-0 margin-bottom online-order">
                <CardHeader className="feedback-card pb-0">
                    <div className="d-flex">
                        <div className="order bg-light-success"><span />
                            <SvgIcon iconId='feedback' />
                        </div>
                        <div className="arrow-chart">
                            <SvgIcon iconId='arrow-chart-up' />
                            <span className="font-success">{'+2.4%'}</span>
                        </div>
                    </div>
                    <div className="online"><span>{'Feedback'}</span>
                        <H2>{'75,5653'}</H2>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="user-details customers">
                        <UL className='simple-list'>
                            {dynamicNumber(4).map((item, index) => (
                                <LI className="d-inline-block" key={index}>
                                    <Image className="rounded-circle" src={dynamicImage(`dashboard-2/user/${item}.png`)} alt="user" />
                                </LI>
                            ))}
                        </UL>
                    </div>
                    <ProgressBar color='success' value={50} />
                </CardBody>
            </Card>
        </Col>
    )
}
