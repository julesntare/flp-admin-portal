import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonProfileHead from '../CommonProfile/CommonProfileHead'
import { Hours10Ago, Href, Jan25, Min1Read } from '../../../../../Utils/Constants'
import { Image, P } from '../../../../../AbstractElements'
import ProfileLike from '../CommonProfile/ProfileLike'
import { dynamicImage } from '../../../../../Utils'

export default function UserThirdProfile() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <CommonProfileHead month={Jan25} time={Min1Read} activeTime={Hours10Ago} /><hr />
                    <P className="block-ellipsis">
                        {"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}
                    </P>
                    <Row className="g-3 mt-4 pictures step7">
                        <Col sm={6}>
                            <a href={Href}>
                                <div className="tour-blog">
                                    <Image className="img-fluid rounded" src={dynamicImage(`other-images/mountain.jpg`)} alt="mountain" />
                                </div>
                            </a>
                        </Col>
                        <Col sm={6}>
                            <a href={Href}>
                                <div className="tour-blog">
                                    <Image className="img-fluid rounded" src={dynamicImage(`other-images/sea.jpg`)} alt="sea" />
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <ProfileLike />
                </div>
            </Card >
        </Col >
    )
}
