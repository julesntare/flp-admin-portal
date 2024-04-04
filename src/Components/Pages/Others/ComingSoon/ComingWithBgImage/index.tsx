import React from 'react'
import { Container } from 'reactstrap'
import { H5, Image } from '../../../../../AbstractElements'
import { WeAreComingSoon } from '../../../../../Utils/Constants'
import CountdownData from '../Common/CountdownData'
import { Link } from 'react-router-dom'
import { dynamicImage } from '../../../../../Utils'

export default function ComingWithBgImage() {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <Container fluid className="p-0 m-0">
                <div className="comingsoon comingsoon-bgimg">
                    <div className="comingsoon-inner text-center">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
                            <Image className="img-fluid" src={dynamicImage(`logo/logo.png`)} alt="" />
                        </Link>
                        <H5>{WeAreComingSoon}</H5>
                        <div className="countdown" id="clockdiv">
                            <CountdownData />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
