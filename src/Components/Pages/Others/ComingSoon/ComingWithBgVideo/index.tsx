import React from 'react'
import { Container } from 'reactstrap'
import { H5, Image } from '../../../../../AbstractElements'
import { WeAreComingSoon } from '../../../../../Utils/Constants'
import CountdownData from '../Common/CountdownData'
import { Link } from 'react-router-dom'
import { dynamicImage } from '../../../../../Utils'

export default function ComingWithBgVideo() {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <Container fluid className="p-0">
                <div className="comingsoon auth-bg-video">
                    <video className="bgvideo-comingsoon" id="bgvid" poster={dynamicImage(`other-images/coming-soon-bg.jpg`)} playsInline autoPlay muted loop>
                        <source src={process.env.PUBLIC_URL + '/assets/video/auth-bg.mp4'} type="video/mp4" />
                    </video>
                    <div className="comingsoon-inner text-center">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                            <Image className="img-fluid" src={dynamicImage(`logo/logo.png`)} alt=""/>
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
