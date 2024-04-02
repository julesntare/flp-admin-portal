import React from 'react'
import ProfileDetail from './ProfileDetail'
import { Card, Col } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function UserFirstProfile() {
    return (
        <Col sm={12}>
            <Card className='hovercard text-center' >
                <div className="cardheader" />
                <div className="user-image">
                    <div className="avatar">
                        <Image src={dynamicImage(`user/7.jpg`)} className='step1' alt='' />
                    </div>
                    <div className="icon-wrapper">
                        <i className="icofont icofont-pencil-alt-5 step2" />
                    </div>
                </div>
                <ProfileDetail />
            </Card>
        </Col>
    )
}
