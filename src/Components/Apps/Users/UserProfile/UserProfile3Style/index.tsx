import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Gallery, Item } from 'react-photoswipe-gallery'
import UserTitle from '../Common/UserTitle'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import UserFooter from '../Common/UserFooter'

export default function UserProfile3Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <UserTitle />
                    <hr />
                    <P>{"Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable."}</P>
                    <Row className="mt-4 pictures my-gallery" id="aniimated-thumbnials-2">
                        {dynamicNumber(2).map((index) => (
                            <Gallery key={index}>
                                <Col sm={6}>
                                    <figure>
                                        <Item original={dynamicImage(`other-images/profile-style-img3.png`)}>
                                            {({ ref, open }) => (
                                                <div ref={ref as React.MutableRefObject<HTMLImageElement>}>
                                                    <Link to={Href} onClick={open}>
                                                        <Image className='img-fluid rounded' src={dynamicImage(`other-images/profile-style-img.png`)} alt='gallery' />
                                                    </Link>
                                                </div>
                                            )}
                                        </Item>
                                    </figure>
                                </Col>
                            </Gallery>
                        ))}
                    </Row>
                    <UserFooter />
                </div>
            </Card>
        </Col>
    )
}
