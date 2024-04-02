import React from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../../CommonCard'
import { FriendsTitle } from '../../../../../../../Utils/Constants'
import { Image } from '../../../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../../../Utils'

export default function FriendsCard() {
    return (
        <Col xl={12} sm={6}>
            <CommonCard title={FriendsTitle}>
                <CardBody className="avatar-showcase filter-cards-view">
                    {dynamicNumber(10).map((list, i) => (
                        <div className="d-inline-block friend-pic" key={i}>
                            <Image className="img-50 rounded-circle" src={dynamicImage(`user/${list}.jpg`)} alt="#" />
                        </div>
                    ))}
                </CardBody>
            </CommonCard>
        </Col>
    )
}
