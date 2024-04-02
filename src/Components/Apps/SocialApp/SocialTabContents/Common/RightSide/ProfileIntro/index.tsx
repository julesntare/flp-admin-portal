import React from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../../CommonCard'
import { AboutMe, Dribbble, Facebook, FavouriteMusicBands, FavouriteTvShows, ProfileIntroTitle, SocialNetworks, Twitter } from '../../../../../../../Utils/Constants'
import { Btn, P } from '../../../../../../../AbstractElements'

export default function ProfileIntro() {
    return (
        <Col xl={12} sm={6} className="xl-100">
            <CommonCard title={ProfileIntroTitle}>
                <CardBody className="filter-cards-view">
                    <span className="mb-2 d-block">{AboutMe} :</span>
                    <P>{"Hi, I’m elana, I’m 30 and I work as a web Designer for the “Daydreams” Agency in Pier 56."}</P>
                    <span className="f-w-600 mb-2 d-block">{FavouriteTvShows} :</span>
                    <P>{"Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy."}</P>
                    <span className="f-w-600 mb-2 d-block">{FavouriteMusicBands}:</span>
                    <P>{"Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy."}</P>
                    <div className="social-network theme-form">
                        <span className="f-w-600">{SocialNetworks}</span>
                        <Btn color='transparent' className="social-btn btn-fb mb-2 text-center"><i className="fa fa-facebook m-r-5"></i>{Facebook}</Btn>
                        <Btn color='transparent' className="social-btn btn-twitter mb-2 text-center"><i className="fa fa-twitter m-r-5"></i>{Twitter}</Btn>
                        <Btn color='transparent' className="social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5"></i>{Dribbble}</Btn>
                    </div>
                </CardBody>
            </CommonCard>
        </Col>
    )
}
