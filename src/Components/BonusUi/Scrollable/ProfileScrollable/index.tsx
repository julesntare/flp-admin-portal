import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import Scrollbars from 'react-custom-scrollbars-2'
import { profileScrollData, profileScrollSubTitle } from '../../../../Data/BonusUiData/ScrollbarData'
import { Image, LI, UL } from '../../../../AbstractElements'
import { ProfileScrollableTitle } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function ProfileScrollable() {

    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ProfileScrollableTitle} subTitle={profileScrollSubTitle} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo scroll-b-none custom-container' autoHide>
                        <UL>
                            {profileScrollData && profileScrollData.map((item, index) => (
                                <LI className="list-group-item-action list-hover-primary" key={index}>
                                    <Image className="rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="user" />{item.text}
                                </LI>
                            ))}
                        </UL>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}