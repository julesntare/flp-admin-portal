import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import Scrollbars from 'react-custom-scrollbars-2'
import { scrollContentSubTitle, scrollableContentData } from '../../../../Data/BonusUiData/ScrollbarData'
import { H3, Image, LI, P, UL } from '../../../../AbstractElements'
import { ScrollableContentTitle } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function ScrollableContent() {

    return (
        <Col xxl={4} md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ScrollableContentTitle} subTitle={scrollContentSubTitle} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo scroll-b-none custom-container' autoHide>
                        <UL className='main-lists-content'>
                            {scrollableContentData && scrollableContentData.map((item, index) => (
                                <LI className={`list-group-item-action list-hover-primary ${index === 0 ? 'active': ''}`} key={index}>
                                    <div className="list-wrapper gap-0">
                                        <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile" />
                                        <div className="list-content">
                                            <H3>{item.head}</H3>
                                            <P>{item.mail}</P>
                                            <small className={index !== 0 ? 'text-muted' : ''}>{item.small}</small>
                                        </div>
                                    </div>
                                </LI>
                            ))}
                        </UL>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}