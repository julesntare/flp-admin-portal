import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import UserTitle from '../Common/UserTitle'
import { dynamicImage } from '../../../../../Utils'
import { Image, P } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'
import UserFooter from '../Common/UserFooter'

export default function UserProfile5Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <UserTitle />
                    <hr />
                    <Row>
                        <Col lg={12} xl={4}>
                            <div className="my-gallery" id="aniimated-thumbnials-3">
                                <Gallery>
                                    <figure>
                                        <Item original={dynamicImage(`blog/img.png`)}>
                                            {({ ref, open }) => (
                                                <div ref={ref as React.MutableRefObject<HTMLImageElement>}>
                                                    <Link to={Href} onClick={open}>
                                                        <Image className='img-fluid rounded' src={dynamicImage(`blog/img.png`)} alt='gallery' />
                                                    </Link>
                                                </div>
                                            )}
                                        </Item>
                                    </figure>
                                </Gallery>
                            </div>
                            <UserFooter />
                        </Col>
                        <Col xl={6}>
                            <P>{'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur'}</P>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    )
}
