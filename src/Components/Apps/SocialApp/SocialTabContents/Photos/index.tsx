import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import { socialPhotosData } from '../../../../../Data/AppsData/SocialAppData'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import { H4, P } from '../../../../../AbstractElements'

export default function Photos() {
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CardBody>
                        <Row className="my-gallery gallery-with-description">
                            <Gallery>
                                {socialPhotosData.map((item) => (
                                    <Col xl={3} sm={6} className='box-col-33' key={item.id}>
                                        <figure>
                                            <Item original={dynamicImage(`big-lightgallry/${item.image}`)} thumbnail={dynamicImage(`big-lightgallry/${item.image}`)}>
                                                {({ ref, open }) => (
                                                    <Link to={Href} onClick={open}>
                                                        <img className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`big-lightgallry/${item.image}`)} alt="" />
                                                        <div className="caption">
                                                            <H4>{item.title}</H4>
                                                            <P>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                                                        </div>
                                                    </Link>
                                                )}
                                            </Item>
                                        </figure>
                                    </Col>
                                ))}
                            </Gallery>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
