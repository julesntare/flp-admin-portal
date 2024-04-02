import React from 'react'
import { Card, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import CommonProfileHead from '../CommonProfile/CommonProfileHead'
import { Href, Jan25, Min3Ago, MinRead6, Profile2Head, Profile2Text, ReadMore, WilliamJennings } from '../../../../../Utils/Constants'
import { H3, Image, P } from '../../../../../AbstractElements'
import ProfileLike from '../CommonProfile/ProfileLike'
import { dynamicImage } from '../../../../../Utils'

export default function UserSecondProfile() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style step5">
                    <CommonProfileHead month={Jan25} time={MinRead6} activeTime={Min3Ago} /><hr />
                    <H3 className="pb-3">{Profile2Head} </H3>
                    <P className="block-ellipsis"> {Profile2Text}<em className="txt-danger"> {WilliamJennings}</em>
                        {" Is most renowned for his expressive colorization, creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far larger enemy troops!"}
                    </P>
                    <div className="img-container">
                        <div id="aniimated-thumbnials">
                            <a href={Href}>
                                <Image className="img-fluid rounded" src={dynamicImage(`other-images/profile-style-img3.png`)} alt="gallery" />
                            </a>
                            <P className="block-ellipsis pt-3">
                                {"The curved canvas is enclosed in a complex frame that the artist created but that his buddy Gottlieb Christian Kuhn carved. A variety of Christian symbols are depicted on the frame, including the faces of five infant angels, a star, grapes, vines, corn, and God's eye.Many of the Romantic elements and subjects that he would explore throughout his career are present in this work, one of his earliest, most notable of which is the landscape's significant significance. In spite of the altarpiece's inclusion of a crucifix, the emphasis is"}
                                <Link className="txt-danger" to={`${process.env.PUBLIC_URL}/applications/users/user-profile`}> {ReadMore}</Link>
                            </P>
                        </div>
                    </div>
                    <ProfileLike />
                </div>
            </Card>
        </Col>
    )
}
