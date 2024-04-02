import React from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../../CommonCard'
import { LatestPhotosTitle } from '../../../../../../../Utils/Constants'
import { Image, LI, UL } from '../../../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../../../Utils'

export default function LatestPhotos() {
    return (
        <Col xl={12} sm={6}>
            <CommonCard title={LatestPhotosTitle}>
                <CardBody className="photos filter-cards-view px-0">
                    <UL className="text-center simple-list flex-row">
                        {dynamicNumber(8).map((list, i) => (
                            <LI key={i}>
                                <div className="latest-post">
                                    <Image className="img-fluid" alt="" src={dynamicImage(`social-app/post-${list}.png`)} body={true} />
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </CommonCard>
        </Col>
    )
}
