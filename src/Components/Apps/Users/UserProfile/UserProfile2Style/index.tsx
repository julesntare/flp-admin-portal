import React from 'react'
import { Card, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Gallery, Item } from 'react-photoswipe-gallery'
import UserTitle from '../Common/UserTitle'
import { Image, P } from '../../../../../AbstractElements'
import UserFooter from '../Common/UserFooter'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'

export default function UserProfile2Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <UserTitle />
                    <hr />
                    <P>{"Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company."}</P>
                    <div className="img-container">
                        <div className="my-gallery" id="aniimated-thumbnials">
                            <Gallery id="aniimated-thumbnials">
                                <figure>
                                    <Item original={dynamicImage(`other-images/profile-style-img3.png`)}>
                                        {({ ref, open }) => (
                                            <div ref={ref as React.MutableRefObject<HTMLImageElement>}>
                                                <Link to={Href} onClick={open}>
                                                    <Image className='img-fluid rounded' src={dynamicImage(`other-images/profile-style-img3.png`)} alt='gallery' />
                                                </Link>
                                            </div>
                                        )}
                                    </Item>
                                </figure>
                            </Gallery>
                        </div>
                    </div>
                    <UserFooter />
                </div>
            </Card>
        </Col>
    )
}
